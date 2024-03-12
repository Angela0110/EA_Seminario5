import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    stars: { type: Number, required: true },
    text: { type: String, required: true }  
});

export default mongoose.model('reviews', schema);
