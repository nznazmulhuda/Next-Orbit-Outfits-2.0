import { model, Schema } from "mongoose";

interface IAdmin {
	name: string;
	email: string;
	role: string;
	image: string;
	phoneNumber: string;
	password: string;
	userName: string;
	isEmailVerified: boolean;
	isPhoneNumberVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		role: {
			type: String,
			enum: ["superAdmin", "admin"],
			default: "admin",
		},
		image: {
			type: String,
			default: "",
		},
		phoneNumber: {
			type: String,
			required: true,
		},
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
		isPhoneNumberVerified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

const Admin = model<IAdmin>("Admin", AdminSchema);

export default Admin;
