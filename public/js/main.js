const deleteBtn = document.querySelectorAll('.del')
const billItem = document.querySelectorAll('span.not')
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
        const response = await fetch('bills/deleteBill', {
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
    const billId = this.parentNode.dataset.id
    try{
        const response = await fetch('bills/markComplete', {
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

function lineColor() {
  const todaysDate = new Date()
  dueDate > (todaysDate - 7) ? billLine.backgroundColor = yellow
    : dueDate > (todaysDate - 3) ? billLine.backgroundColor = red  
}

lineColor()