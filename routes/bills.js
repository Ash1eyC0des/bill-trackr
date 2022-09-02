const express = require('express')
const router = express.Router()
const billsController = require('../controllers/bills') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, billsController.getBills)

router.get('/unpaid', ensureAuth, billsController.getUnpaid)

router.get('/paid', ensureAuth, billsController.getPaid)

router.post('/createBill', billsController.createBill)

router.put('/markPaid', billsController.markPaid)

router.put('/markUnpaid', billsController.markUnpaid)

router.delete('/deleteBill', billsController.deleteBill)

module.exports = router