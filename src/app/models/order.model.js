const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookModel = require('./book.model');

const orderSchema = new Schema({
    orderId: { type: String, required: true },
    bookList: [
        {
            book: {
                type: Schema.Types.ObjectId,
                ref: 'book',
                required: true,
            },
            quantity: { type: Number, required: true },
        },
    ],
    user: { type: Schema.Types.ObjectId, ref: 'user', default: null },
    pending: { type: Boolean, default: true },
    success: { type: Boolean, default: false },
    orderDate: { type: Date, default: Date.now },
    tel: { type: String, required: true },
    address: { type: String, default: null },
    shipping: { type: Boolean, default: true }, // true: giao hàng tận nơi, false: nhận sách tại tủ sách
    payment: { type: Boolean, default: true }, //true: thanh toán khi nhận sách, false: thanh toán qua momo
    total: { type: Number, required: true },
    point: { type: Number, required: true, default: 0 },
});

const OrderModel = mongoose.model('order', orderSchema);

module.exports = {
    queryOrders(page, limit) {
        return OrderModel.find({})
            .populate('bookList.book')
            .populate('user', 'name')
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ orderDate: -1 })
            .lean();
    },

    async updateOrderStatus(id, status) {
        // status = 0: success
        let order = await OrderModel.findById(mongoose.Types.ObjectId(id));

        if (status == 0) {
            order.success = true;
        } else if (status == 1) {
            order.success = false;
            for (let child of order.bookList) {
                await BookModel.increaseQuantity(child.book, child.quantity);
            }
        } else return false;

        order.pending = false;
        await order.save();

        return true;
    },

    loadOrdersByUser(userId) {
        return OrderModel.find({
            user: mongoose.Types.ObjectId(userId),
        })
            .populate('bookList.book')
            .lean();
    },

    loadConfirmedOrdersByUser(userId) {
        return OrderModel.find({
            user: mongoose.Types.ObjectId(userId),
            pending: false,
        })
            .populate('bookList.book')
            .lean();
    },

    loadPendingOrdersByUser(userId) {
        return OrderModel.find({
            user: mongoose.Types.ObjectId(userId),
            pending: true,
        })
            .populate('bookList.book')
            .lean();
    },

    async createOrder(order) {
        const orderid = require('order-id')('khoa-don-hang');
        const id = orderid.generate();
        const checkOrderId = await OrderModel.find({ orderId: id.toString() });

        if (checkOrderId.length > 0) {
            return { err: 'order id existed' };
        }

        let total = 0;

        for (let child of order.bookList) {
            console.log(child);
            const book = await BookModel.loadBookById(
                mongoose.Types.ObjectId(child.book)
            );
            const newQuantity = book.quantity - child.quantity;

            if (newQuantity < 0) {
                return {
                    err: 'Không đủ số lượng sách trong kho',
                };
            } else {
                await BookModel.updateQuantity(book._id, newQuantity);
            }
            total += book.newprice * child.quantity;
        }

        console.log(total);
        order.total = total;
        order.point = total / 10000;
        order.orderId = id;
        order['orderDate'] = new Date();

        const newOrder = new OrderModel(order);
        const err = newOrder.validateSync();
        if (err) return { err: err };

        await newOrder.save();
        return {
            data: order,
        };
    },
};
