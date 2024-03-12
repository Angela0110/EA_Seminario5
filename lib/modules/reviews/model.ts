import * as mongoose from 'mongoose';

export interface IReview {
    _id?: mongoose.Types.ObjectId;
    author: mongoose.Types.ObjectId;
    stars: number;
    text: string;
}