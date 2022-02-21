let counter=0;
document.getElementById('btn').addEventListener('click',function(){
    counter++;
    let=randomNumber=Math.floor(Math.random()*11);
    let inputValue= document.getElementById('getNumber').valueAsNumber;
    if(inputValue<0 || inputValue>10 | inputValue=="" || isNaN(inputValue)==true){
        message('invalid');
        return;
    }

    

    if(inputValue==randomNumber){
        message('win');
        document.getElementById('getNumber').value='';
    }


    let tableInfo= document.getElementById('table-info');
    let tr= document.createElement('tr');
    let td1=document.createElement('td')
    let td2=document.createElement('td')
    let td3=document.createElement('td')
    let td4=document.createElement('td')

    if(inputValue==randomNumber){
        td4.innerText='Win'
    }
    else{td4.innerText='Lose'}

    td1.innerText=counter;
    td2.innerText=inputValue;
    td3.innerText=randomNumber;

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
   tableInfo.appendChild(tr);

   document.getElementById('getNumber').value="";

})

function message(status){
    if(status=='win'){
        
    }
    if(status=='invalid'){
        document.getElementById('invalidAlert').style.display=('block')
    }
  
}