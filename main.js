// ===============================!Input GetId
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productQuantity = document.getElementById('productQuantity');
var productCategory = document.getElementById('productCategory');
var productDescription = document.getElementById('productDescription');
var tablePushItem = document.getElementById('tablePushItem');
// ===============================!Function Get Value
var valueArr = [];
function GetValue(){
    var productValue = {
        name:productName.value,
        Price:productPrice.value,
        quantity:productQuantity.value,
        category:productCategory.value,
        description:productDescription.value,
    }
    valueArr.push(productValue);
    displayItem();
    console.log(valueArr);
}
function displayItem(){
    var item = "";
    for(let i = 0 ; i<valueArr.length ; i++)
    {
        item += "<tr><th>"+valueArr[i].name+"</th><th>"+valueArr[i].Price+"</th><th>"+valueArr[i].quantity+"</th><th>"+valueArr[i].category+"</th><th>"+valueArr[i].description+"</th></tr>";

        // item += `<tr><th>${valueArr[i].name}</th><th>${valueArr[i].Price}</th><th>${valueArr[i].quantity}</th><th>${valueArr[i].category}</th><th>${valueArr[i].description}</th></tr>`;
    }
    tablePushItem.innerHTML = item;
}
// ===============================Clear Value
function clearValue(){
    productName.value ="";
    productPrice.value ="";
    productQuantity.value ="";
    productCategory.value ="";
    productDescription.value ="";

}

// ===============================Stop Reload
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
