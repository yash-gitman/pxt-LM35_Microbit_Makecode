// blocks.ts
// Define the block to read temperature
namespace LM35 {
    //% blockId=read_temperature block="read LM35 temperature"
    export function readTemperature(): number {
        let analogValue = pins.analogReadPin(AnalogPin.P2); // Read from pin 2
        let voltage = (analogValue / 1023.0) * 3.3; // Convert to voltage
        let temperature = voltage * 100; // Convert to temperature
        return temperature; // Return temperature
    }
}
