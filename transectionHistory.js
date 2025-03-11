document.getElementById("transaction-box").addEventListener("click",function(event){
    event.preventDefault();
    handleToggle("addmoney","none");
    handleToggle("cashout","none");
    handleToggle("transaction-history","block");
})