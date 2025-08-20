
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const balance = document.getElementById('balance');
const interface = document.getElementById('formInterface');
const amt = document.getElementById('amt');
const desc = document.getElementById('desc');
const amtType = document.getElementById('amountType');
const list =document.getElementById('list');
const typeFilter = document.getElementById('typeFilter');
const dateFilter = document.getElementById('dateFilter');

renderAll(transactions)
totBalance()


interface.addEventListener('submit',function(e){
    e.preventDefault();
    const date1 = new Date();
    if(amtType.value==''){
        window.alert('Enter the type of payment');
        return
    }

    const transaction = {
        id:Date.now(),
        amount:Number(amt.value),
        description:desc.value,
        type:amtType.value,
        year:date1.getFullYear(),
        month:(date1.getMonth()+1),
        date:date1.getDate()

    }

    transactions.push(transaction);
    saveData()
    totBalance()
    renderAll(transactions)
    amt.value='';
    desc.value='';
    amtType.value='';
})
function totBalance(){
    const total = transactions.reduce((acc,elem) => {
        if(elem.type==='expense')
            return acc-elem.amount 
        else if(elem.type==='income')
            return acc+elem.amount
    },0)
    balance.textContent= `Balance: ₹${total}`
}

// function renderTrans(transaction){
//         const item=document.createElement('li');
//         const delBtn=document.createElement('button')
//         item.textContent=transaction.description;
//         delBtn.textContent='delete';
//         item.appendChild(delBtn);
//         list.appendChild(item);

//     }
    


function renderAll(trans){
    list.innerHTML = "";
    const date = new Date()
    trans.forEach((elem) => {
        const item=document.createElement('li');
        const delBtn=document.createElement('button');
        item.textContent=`Amount: ₹${elem.amount} // Type: ${elem.type} // Description: ${elem.description} // Date: ${elem.date}/${elem.month}/${elem.year}`;
        delBtn.textContent='X';
        delBtn.addEventListener('click',() => {
            removeTransaction(elem.id)
        })
        item.appendChild(delBtn);
        list.appendChild(item);
    })
    
}

function removeTransaction(id){
    transactions = transactions.filter( (elem) =>{
        if(elem.id!==id)
            return elem
    })
    renderAll(transactions)
    saveData()
    totBalance()
}

typeFilter.addEventListener('change',function(){
    if(typeFilter.value=='income'){
        let filtered = transactions.filter((elem) => {
            if(elem.type==='income')
                return elem
        });
    renderAll(filtered)
    }
    else if(typeFilter.value=='expense'){
        let filtered = transactions.filter((elem) => {
            if(elem.type==='expense')
                return elem
        });
        renderAll(filtered)
    }
    else{
        renderAll(transactions)
    }
    
})
dateFilter.addEventListener('change',function(){
    let filtered=[];
    if(dateFilter.value==='January'){
         filtered= transactions.filter(function(elem){
            if(elem.month==1)
                return elem
        })
        
        
    }
    else if(dateFilter.value==='February'){
         filtered= transactions.filter(function(elem){
            if(elem.month==2)
                return elem
        })
    }
    else if(dateFilter.value==='March'){
         filtered= transactions.filter(function(elem){
            if(elem.month==3)
                return elem
        })
    }
    else if(dateFilter.value==='April'){
         filtered= transactions.filter(function(elem){
            if(elem.month==4)
                return elem
        })
    }
    else if(dateFilter.value==='May'){
         filtered= transactions.filter(function(elem){
            if(elem.month==5)
                return elem
        })
    }
    else if(dateFilter.value==='June'){
         filtered= transactions.filter(function(elem){
            if(elem.month==6)
                return elem
        })
    }
    else if(dateFilter.value==='July'){
         filtered= transactions.filter(function(elem){
            if(elem.month==7)
                return elem
        })
    }
    else if(dateFilter.value==='August'){
         filtered= transactions.filter(function(elem){
            if(elem.month==8)
                return elem
        })
    }
    else if(dateFilter.value==='September'){
         filtered= transactions.filter(function(elem){
            if(elem.month==9)
                return elem
        })
    }
    else if(dateFilter.value==='October'){
         filtered= transactions.filter(function(elem){
            if(elem.month==10)
                return elem
        })
    }
    else if(dateFilter.value==='November'){
         filtered= transactions.filter(function(elem){
            if(elem.month==11)
                return elem
        })
    }
    else if(dateFilter.value==='December'){
         filtered= transactions.filter(function(elem){
            if(elem.month==12)
                return elem
        })
    }
    renderAll(filtered)
})

function saveData() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}