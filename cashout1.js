document.getElementById("cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    const acountNumber = document.getElementById("Acount-Number").value;
    const amount = getInputValueByID("cash-amount");
    const pin = getInputValueByID("cash-Pin");
    const mainBalance = getInnerTextByID("main-balance");

    if(amount>mainBalance){
        alert('invalid amount');
        return;
    }

    if(acountNumber.length===11){
        if(pin===1234){
            const sum = mainBalance - amount;
            getInnerTextByIDandValue("main-balance",sum)


            const container = document.getElementById("transaction-container-cashout");

            const div = document.createElement("div");
            div.classList.add("bg-blue-200")
            div.innerHTML=`
            <h1>cashout:${amount}</h1>
            <h3>form this amount number - ${acountNumber}</h3>

            `;
            container.appendChild(div);
            // const p = document.createElement("p");
            // p.innerText=`
            // cashout ${amount} from this ${acountNumber} amount;

            // `;
            // container.appendChild(p);

        }
        else{
            alert('please enter your pinNumber');
        }  
    }
    else{
        alert('please enter your acountNumber');
    }
});
