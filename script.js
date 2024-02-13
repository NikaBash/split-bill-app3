const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonChild = document.querySelector("#addChild");
buttonChild.addEventListener("click", snowChild);

function snowChild(e) {
    e.preventDefault();
    child.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const child = document.querySelector("#child").value;
    
    if(bill === "" || people === "" || people < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter your information!',
          })
          return false;
    }
    let amountPerPerson = bill/people;
    let childPerPerson = (bill*child)/people;
    let totalSum = amountPerPerson + childPerPerson;
    
    amountPerPerson = amountPerPerson.toFixed(2);
    childPerPerson = childPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedChild").textContent = childPerPerson;
    document.querySelector("#billAndChild").textContent = totalSum;

}