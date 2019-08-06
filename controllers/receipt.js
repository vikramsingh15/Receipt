const Receipt=require('../models/receipt')

module.exports={

	newReceipt(req,res,next){
		res.render('newReceipt');
	},

	async postReceipt(req,res,next){
		if(req.file){
				const {secure_url,public_id}=req.file;
				req.body.image={secure_url,public_id};
		}
		

		const receipt=await Receipt.create(req.body);
		return res.redirect(`/receipt/${receipt.id}`);
	},

	async showReceipt(req,res,next){
		const receipt=await Receipt.findById(req.params.id);
		return res.render('showReceipt',{receipt});
	}
}