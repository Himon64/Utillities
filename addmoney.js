document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const mainBalance = getInnerTextByID("main-balance")
    const pin = getInputValueByID("pin-ID");
    const acount = document.getElementById("Acount-Number").value;
    const selectedBank = document.getElementById("allbank").value;
    
    if(amount<0){
        alert('bhai eita knono kotha positive number  dite hobe');
        return;
    }

    if(acount.length===11){
        if(pin===1234){
            const sum = mainBalance + amount;
            getInnerTextByIDandValue("main-balance",sum);

            const container = document.getElementById("transaction-container");

            const div = document.createElement("div");
            div.classList.add("bg-red-400")
            div.innerHTML=`
            <h1>ADDed Money form: ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>acount number:${acount}</P>
            `;
            container.appendChild(div);


        //     const p = document.createElement("p");
        //     p.innerText = `
        //     added ${amount} from this ${acount} acount;
        //     `;
        //    container.appendChild(p)

        }
        else{
            console.log('pin number tick nai');
        }
    }
    else{
        console.log('please enter your acount number');
    }
})
