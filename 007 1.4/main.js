// Alexander Paryani
// 12 APR 2024
//Pizza Orders

// Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

// Store order code in a function
function placeOrder() {
    // INPUT
    const size = prompt("Enter size of pizza (small, medium, large): ");
    const topping1 = prompt("Enter first topping: ");
    const topping2 = prompt("Enter second topping: ");

    // PROCESS
    const msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

    // OUTPUT
    alert(msg);
}