// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").onclick=function addToWallet(event){
    var x=document.querySelector("#amount").value;
    document.querySelector("h1").innerText="x";
}