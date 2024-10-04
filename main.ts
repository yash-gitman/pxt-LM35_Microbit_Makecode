// main.ts

// Function to read temperature from LM35
function readTemperature(): number {
    // Use analog pin 0 (A0) to read the LM35
    let analogValue = pins.analogReadPin(AnalogPin.P0); // Change P0 if needed
    let voltage = (analogValue / 1023.0) * 3.3; // Convert raw value to voltage
    let temperature = voltage * 100; // Convert voltage to temperature in Celsius
    return temperature; // Return temperature value
}

// Add a block to read temperature
// Create a block in the MakeCode toolbox to call this function
basic.forever(function () {
    let temp = readTemperature();
    // Display temperature on the micro:bit screen
    basic.showString("T:" + temp + "C");
    basic.pause(1000); // Pause for a second before next reading
});
