let customerList = [];

document.querySelector("#btnSubmit").addEventListener("click", () => {
    Swal.fire({
        title: "Submited",
        icon: "success",
        draggable: true
    });
    let name = document.getElementById("txtUsername").value;
    let phone = document.getElementById("txtPhone").value;
    let email = document.getElementById("txtEmail").value;

    let customer = {
        name: name,
        phone: phone,
        email: email
    }
    customerList.push(customer);
    console.log(customerList);
    loadTable();
});

function loadTable() {
    let body = ` 
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
        </tr>`
    customerList.forEach(customer => {
         body+=`
          <tr>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
           </tr>
         `
    });

    document.getElementById("table").innerHTML=body;
}