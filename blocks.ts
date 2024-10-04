// blocks.ts

// Define the block to read temperature
// This block can be used in the MakeCode editor
namespace LM35 {
    //% blockId=read_temperature block="read LM35 temperature"
    //% blockSetVariable=temperature
    export function readTemperature(): number {
        let analogValue = pins.analogReadPin(AnalogPin.P0); // Read from A0 (P0)
        let voltage = (analogValue / 1023.0) * 3.3; // Convert to voltage
        let temperature = voltage * 100; // Convert to temperature
        return temperature; // Return temperature
    }
}
