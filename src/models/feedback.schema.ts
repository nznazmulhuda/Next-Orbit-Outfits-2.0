import { model, Schema } from "mongoose";

interface IFeedback extends Document {
	userId: object;
	feedback: string;
	productId: object;
	createdAt: Date;
	updatedAt: Date;
}

const FeedbackSchema = new Schema<IFeedback>(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		feedback: {
			type: String,
			required: true,
		},
		productId: {
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	},
	{ timestamps: true },
);

const Feedback = model<IFeedback>("Feedback", FeedbackSchema);

export default Feedback;
