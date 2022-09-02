const Bill = require('../models/Bill')

module.exports = {
    getBills: async (req,res)=>{
        console.log(req.user)
        try{
            const billItems = await Bill.find({userId:req.user.id})
            const itemsLeft = await Bill.countDocuments({userId:req.user.id,completed: false})
            res.render('bills.ejs', {bills: billItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getPaid: async (req,res)=>{
        console.log(req.user)
        try{
            const billItems = await Bill.find({userId:req.user.id, paid: true})//.toArray()
            // const paidBills = billItems.filter(bill => bill.paid)
            const itemsLeft = await Bill.countDocuments({userId:req.user.id,completed: false})
            res.render('paidbills.ejs', {bills: billItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getUnpaid: async (req,res)=>{
        console.log(req.user)
        try{
            const billItems = await Bill.find({userId:req.user.id, paid: false})//.toArray()
            // const unpaidBills = billItems.filter(bill => !bill.paid)
            const itemsLeft = await Bill.countDocuments({userId:req.user.id,completed: false})
            res.render('bills.ejs', {bills: billItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createBill: async (req, res)=>{
        try{
            await Bill.create({bills: req.body.billItem, paid: false, userId: req.user.id})
            console.log('Bill has been added!')
            res.redirect('/bills')
        }catch(err){
            console.log(err)
        }
    },
    markPaid: async (req, res)=>{
        try{
            await Bill.findOneAndUpdate({_id:req.body.billIdFromJSFile},{
                completed: true
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
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
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