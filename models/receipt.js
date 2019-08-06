const mongoose= require("mongoose"),
		Schema=mongoose.Schema;

		const receiptSchema = new Schema({
			name:String,
			address:String,
			ammount:Number,
			receiptNumber:String,
			image:{ 
				public_id:String,
				secure_url:String
				},
			createdAt:{type:Date,default:Date.now}
		})	

module.exports = mongoose.model("receipt",receiptSchema);