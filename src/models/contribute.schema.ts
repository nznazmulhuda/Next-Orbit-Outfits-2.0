import { model, Schema } from "mongoose";

interface IContribution extends Document {
	image: string;
	userId: object;
	status: string;
	total_sell: number;
	points: number;
	reason: string;
	total_points: number;
}

const ContributionSchema = new Schema<IContribution>(
	{
		image: {
			type: String,
			required: true,
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		status: {
			type: String,
			enum: ["pending", "approved", "rejected"],
			default: "pending",
		},
		total_sell: {
			type: Number,
			default: 0,
		},
		points: {
			type: Number,
			default: 0,
		},
		reason: {
			type: String,
			default: "",
		},
		total_points: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true },
);

const Contribution = model<IContribution>("Contribution", ContributionSchema);

export default Contribution;
