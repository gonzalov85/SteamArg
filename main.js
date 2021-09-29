var form = document.querySelector('form');
var preciobase = document.getElementById('preciobase');
var calcular = document.getElementById('calcular');
var resultado = document.getElementById('resultado');
form.onsubmit = function(e) {
    if (Number.isNaN(parseFloat(preciobase.value)) || parseFloat(preciobase.value) < 0 ) {
        e.preventDefault();
        resultado.innerHTML = "<span class='error'>Error: Debe ingresar solo números enteros positivos sin símbolos. Ej.: 250,99</span>"
    } else {
        e.preventDefault();
        let number = preciobase.value.replace(/,/g, '.');
        console.log(number)
        let suma = (parseFloat(number) + parseFloat(number) *0.65);
        suma = suma.toFixed(2)
        suma = String(suma).replace(/\./g, ',');
        resultado.innerHTML = `<span class="step">RESULTADO:</span> El precio con impuestos será de aproximadamente <span class="total">${suma}</span> pesos.`;
        }
    }
