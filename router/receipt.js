const express=require('express');
const router=express.Router();
const {asyncErrorHandler}=require('../middleware');
const {newReceipt,postReceipt,showReceipt}=require('../controllers/receipt');
const {upload}=require('../cloudinary');


router.get('/',newReceipt);

router.post('/',upload.single('image'),asyncErrorHandler(postReceipt));

router.get('/:id',asyncErrorHandler(showReceipt));

module.exports=router;