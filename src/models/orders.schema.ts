import { model, Schema } from "mongoose";

interface IOrder extends Document {
	product_id: object;
	quantity: number;
	color_variant: string;
	size_variant: string;
	user_id: object;
	order_status: string;
	payment_status: string;
	payment_method: string;
	total_price: number;
	shipping_address: string;
	shipping_phone: string;
	cuppon_code: string;
	cuppon_discount: number;
	single_price: number;
	shipping_cost: number;
	review: object;
	referance_id: object;
	createdAt: Date;
	updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
	{
		product_id: {
			type: Schema.Types.ObjectId,
			require: true,
			ref: "Product",
		},
		quantity: {
			type: Number,
			require: true,
			default: 1,
		},
		color_variant: {
			type: String,
			require: true,
		},
		size_variant: {
			type: String,
			require: true,
			enum: ["S", "M", "L", "XL", "XXL"],
		},
		user_id: {
			type: Schema.Types.ObjectId,
			require: true,
			ref: "User",
		},
		order_status: {
			type: String,
			require: true,
			enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
			default: "pending",
		},
		payment_status: {
			type: String,
			require: true,
			enum: ["pending", "paid", "failed"],
			default: "pending",
		},
		payment_method: {
			type: String,
			require: true,
			enum: ["cash", "bank_transfer", "bkash", "nagad"],
		},
		total_price: {
			type: Number,
			require: true,
		},
		shipping_address: {
			type: String,
			require: true,
		},
		shipping_phone: {
			type: String,
			require: true,
		},
		cuppon_code: {
			type: String,
			require: false,
		},
		cuppon_discount: {
			type: Number,
			require: false,
		},
		single_price: {
			type: Number,
			require: true,
		},
		shipping_cost: {
			type: Number,
			require: true,
		},
		review: {
			type: Schema.Types.ObjectId,
			require: false,
			ref: "Review",
		},
		referance_id: {
			type: Schema.Types.ObjectId,
			ref: "User",
			require: false,
		},
	},
	{ timestamps: true },
);

const Order = model<IOrder>("Order", OrderSchema);

export default Order;
