function convertUnits() {
    // Get the value and units from the input fields
    let value = parseFloat(document.getElementById("value").value);
    let fromUnit = document.getElementById("from-unit").value;
    let toUnit = document.getElementById("to-unit").value;
    
    // Conversion rates
    const conversionRates = {
        meters: 1,
        kilometers: 0.001,
        miles: 0.000621371,
        yards: 1.09361
    };

    if (isNaN(value)) {
        alert("Please enter a valid number.");
        return;
    }

    // Convert the input value to meters first
    let valueInMeters = value / conversionRates[fromUnit];

    // Convert from meters to the target unit
    let result = valueInMeters * conversionRates[toUnit];

    // Display the result
    document.getElementById("result").textContent = result.toFixed(4);
}
