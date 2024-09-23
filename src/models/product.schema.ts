import { model, Schema } from "mongoose";

interface IProduct {
	images: string[];
	title: string;
	price: number;
	discount: number;
	description: string;
	size: string[];
	fabrics: string[];
	colors: string[];
	crew_neck: boolean;
	half_sleeve: boolean;
	full_sleeve: boolean;
	contributor: object;
	old_price: number;
	isSale: boolean;
	total_sell: number;
	reviews: object;
	category: string[];
	createdAt: Date;
	updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
	{
		images: {
			type: [String],
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			default: 0,
		},
		description: {
			type: String,
			required: true,
		},
		size: {
			type: [String],
			required: false,
			default: ["m", "l", "xl", "xxl"],
		},
		fabrics: {
			type: [String],
			required: false,
			default: ["cotton"],
		},
		colors: {
			type: [String],
			required: true,
			default: ["red", "blue", "green", "yellow", "purple", "orange"],
		},
		crew_neck: {
			type: Boolean,
			required: false,
			default: true,
		},
		half_sleeve: {
			type: Boolean,
			required: false,
			default: true,
		},
		full_sleeve: {
			type: Boolean,
			required: false,
			default: false,
		},
		contributor: {
			type: Schema.Types.ObjectId,
			ref: "Contributor",
			required: false,
		},
		old_price: {
			type: Number,
			required: false,
		},
		isSale: {
			type: Boolean,
			required: false,
			default: false,
		},
		total_sell: {
			type: Number,
			default: 0,
		},
		reviews: {
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
		category: {
			type: [String],
			default: ["Cotton", "Half-Sleeve"],
		},
	},
	{ timestamps: true },
);

const Product = model<IProduct>("Product", ProductSchema);

export default Product;
