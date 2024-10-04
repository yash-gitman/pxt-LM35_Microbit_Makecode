// main.ts
// Function to read temperature from LM35
export function readTemperature(): number {
    let analogValue = pins.analogReadPin(AnalogPin.P2); // Read from pin 2
    let voltage = (analogValue / 1023.0) * 3.3; // Convert to voltage
    let temperature = voltage * 100; // Convert to temperature
    return temperature; // Return temperature
}
