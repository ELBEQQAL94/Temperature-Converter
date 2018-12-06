// Get Elements From DOM
const Celsius = document.querySelector('#celcius');
const Fahrenheit = document.querySelector('#fahrenheit');
const Kelvin = document.querySelector('#kelvin');

// Temperature Converter Formula
function celsiusToFahrenheit(celsius) {
    return `${Math.round((celsius * 9/5) + 32)}`;
}

function fahrenheitToCelsius(fahrenheit) {
    return `${Math.round((fahrenheit - 32) * 5/9)}`;
}

function fahrenheitToKelvin(fahrenheit) {
   return `${Math.round((fahrenheit + 459.67) * 5/9)}`;
}

function kelvinToFahrenheit(kelvin) {
   return `${Math.round((kelvin * 9/5) - 459.67)}`;
}

function celsiusToKelvin(celsius) {
    return `${Math.round(celsius + 273)}`;
}

function KelvinToCelsius(kelvin) {
   return `${Math.round(kelvin - 273)}`;
}

// Add Evenets On inputs field
Celsius.addEventListener('input', () => {
   Fahrenheit.value =  parseFloat(celsiusToFahrenheit(Celsius.value));
   Kelvin.value = parseFloat(celsiusToKelvin(Celsius.value));
});
Fahrenheit.addEventListener('input', () => {
    Celsius.value = parseFloat(fahrenheitToCelsius(Fahrenheit.value));
    Kelvin.value = parseFloa(celsiusToKelvin(Fahrenheit.value));
});
Kelvin.addEventListener('input', () => {
    Celsius.value = parseFloat(KelvinToCelsius(Kelvin.value));
    Fahrenheit.value = parseFloat(kelvinToFahrenheit(Kelvin.value));
});