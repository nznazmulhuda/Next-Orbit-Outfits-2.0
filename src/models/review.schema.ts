import { model, Schema } from "mongoose";

interface IReview extends Document {
	user_id: object;
	product_id: object;
	rating: number;
	review: string;
	createdAt: Date;
	updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>(
	{
		user_id: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		product_id: {
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
		rating: {
			type: Number,
			required: true,
		},
		review: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

const Review = model<IReview>("Review", ReviewSchema);

export default Review;
