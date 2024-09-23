import { model, Schema } from "mongoose";

interface IUser {
	fullName: string;
	email: string;
	phoneNumber: string;
	address: string;
	image: string;
	role: string;
	totalPoints: number;
	feedbacks: string[];
	reviews: string[];
	orders: string[];
	contributions: string[];
	password: string;
	userName: string;
	isEmailVerified: boolean;
	isNumberVerified: boolean;
	referralCode: string;
	referredBy: object;
	totalReferrals: number;
	referralPoints: number;
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			default: "",
		},
		role: {
			type: String,
			enum: ["user", "contributor", "admin"],
			default: "user",
		},
		totalPoints: {
			type: Number,
			default: 0,
		},
		feedbacks: [
			{
				type: Schema.Types.ObjectId,
				ref: "Feedback",
			},
		],
		reviews: [
			{
				type: Schema.Types.ObjectId,
				ref: "Review",
			},
		],
		orders: [
			{
				type: Schema.Types.ObjectId,
				ref: "Order",
			},
		],
		contributions: [
			{
				type: Schema.Types.ObjectId,
				ref: "Contribution",
			},
		],
		password: {
			type: String,
			required: true,
		},
		userName: {
			type: String,
			required: true,
		},
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
		isNumberVerified: {
			type: Boolean,
			default: false,
		},
		referralCode: {
			type: String,
			required: true,
		},
		referredBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		totalReferrals: {
			type: Number,
			default: 0,
		},
		referralPoints: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true },
);

const User = model<IUser>("User", UserSchema);

export default User;
