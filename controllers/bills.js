const Bill = require('../models/Bill')

module.exports = {
    getBills: async (req,res)=>{
        console.log(req.user)
        try{
            const billItems = await Bill.find({userId:req.user.id})
            const itemsLeft = await Bill.countDocuments({userId:req.user.id,completed: false})
            //res.render('bills.ejs', {bills: billItems, left: itemsLeft, user: req.user})
            res.redirect('/bills/unpaid')
        }catch(err){
            console.log(err)
        }
    },
    getPaid: async (req,res)=>{
        console.log(req.user)
        try{
            const billItems = await Bill.find({userId:req.user.id, paid: true}).sort({dueDate: 1})
            const itemsLeft = await Bill.countDocuments({userId:req.user.id,completed: false})
            res.render('paidbills.ejs', {bills: billItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getUnpaid: async (req,res)=>{
        console.log(req.user)
        try{
            const billItems = await Bill.find({userId:req.user.id, paid: false}).sort({dueDate: 1})
            const itemsLeft = await Bill.countDocuments({userId:req.user.id,completed: false})
            res.render('bills.ejs', {bills: billItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createBill: async (req, res)=>{
        console.log(req.body)
        try{
            await Bill.create({bill: req.body.billItem, paid: false, userId: req.user.id, dueDate: req.body.date, category: req.body.category, amount: req.body.amount})
            console.log('Bill has been added!')
            res.redirect('/bills/unpaid')
        }catch(err){
            console.log(err)
        }
    },
    markPaid: async (req, res)=>{
        try{
            await Bill.findOneAndUpdate({_id:req.body.billIdFromJSFile},{
                paid: true,
                paidDate: Date.now(),
            })
            console.log('Marked Paid')
            res.json('Marked Paid')
        }catch(err){
            console.log(err)
        }
    },
    markUnpaid: async (req, res)=>{
        try{
            await Bill.findOneAndUpdate({_id:req.body.billIdFromJSFile},{
                paid: false
            })
            console.log('Marked Unpaid')
            res.json('Marked Unpaid')
        }catch(err){
            console.log(err)
        }
    },
    deleteBill: async (req, res)=>{
        console.log(req.body.billIdFromJSFile)
        try{
            await Bill.findOneAndDelete({_id:req.body.billIdFromJSFile})
            console.log('Deleted Bill')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    