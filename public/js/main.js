const deleteBtn = document.querySelectorAll('.del')
const billItem = document.querySelectorAll('.not')
const billComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteBill)
})

Array.from(billItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(billComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteBill(){
    const billId = this.parentNode.dataset.id
    try{
        const response = await fetch('deleteBill', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'billIdFromJSFile': billId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    console.log('Button was pressed')
    const billId = this.parentNode.dataset.id
    console.log(billId)
    try{
        const response = await fetch('markPaid', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'billIdFromJSFile': billId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const billId = this.parentNode.dataset.id
    try{
        const response = await fetch('bills/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'billIdFromJSFile': billId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


// Conditional Formatting by Due Date
const billLines = document.querySelectorAll('.outstanding')
const todaysDate = new Date()

Array.from(billLines).forEach((el)=> {
    const dueDate = Date.parse(el.dataset.duedate)
    if (dueDate <= todaysDate.getTime()) {
        // el.style.backgroundColor = '#dc3545'
        el.style.color = '#dc3545'
    } else if (dueDate - todaysDate.getTime() <= 604800000) {
        el.style.color = '#ffbd59'
    } else
     el.style.color = '#074956'
})

function setTwoNumberDecimal(el) {
    el.value = parseFloat(el.value).toFixed(2);
};