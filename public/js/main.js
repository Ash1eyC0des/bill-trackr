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

const billLine = document.querySelectorAll('.billItem')

// function lineColor() {
//   const todaysDate = new Date()
//   dueDate > (todaysDate - 7) ? billLine.backgroundColor = yellow
//     : dueDate > (todaysDate - 3) ? billLine.backgroundColor = red  
// }

// lineColor()