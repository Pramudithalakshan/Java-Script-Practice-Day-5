
let itemList = [];
document.querySelector("#btnItemSubmit").addEventListener("click", () => {
    let itemName = document.getElementById("txtItemName").value;
    let itemPrice = document.getElementById("txtItemPrice").value;
    let itemQty = document.getElementById("txtItemQty").value;
    let itemDes = document.getElementById("txtItemDescription").value;
    
    
    let items = {
        itemName: itemName,
        itemPrice: itemPrice,
        itemQty: itemQty,
        itemDec: itemDes
    }
    itemList.push(items);
    loadItemTable();
});

function loadItemTable() {

    let body = `
        <tr>
            <td>Item Name</td>
            <td>Item Price</td>
            <td>Item Qty</td>
            <td>Item Description</td>
        </tr>`
    itemList.forEach(item => {
        console.log(item);
        
        body += `
        <tr>
            <td>${item.itemName}</td>
            <td>${item.itemPrice}</td>
            <td>${item.itemQty}</td>
            <td>${item.itemDec}</td>
           </tr>
       `
    });
     alert("Hi theekshana");
    document.getElementById("itemTable").innerHTML = body;

}