function calculateTip() {
    const bill = parseFloat(document.getElementById("billAmount").value);
    const tipPercent = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        alert("Please enter valid numbers.");
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;

    document.getElementById("tipAmount").textContent = `Tip: £${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `Total: £${total.toFixed(2)}`;
}