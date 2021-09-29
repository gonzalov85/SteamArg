var form = document.querySelector('form');
var preciobase = document.getElementById('preciobase');
var calcular = document.getElementById('calcular');
var resultado = document.getElementById('resultado');
form.onsubmit = function(e) {
    if (Number.isNaN(parseFloat(preciobase.value))) {
        e.preventDefault();
        resultado.innerHTML = "Debe ingresar solo números sin símbolos"
    } else {
        e.preventDefault();
        preciobase.value.replace(/,/g, '.');
        let suma = (parseFloat(preciobase.value) + parseFloat(preciobase.value) *0.65).toFixed(2);
        suma = String(suma).replace(/\./g, ',');
        resultado.innerHTML = `<span class="step">RESULTADO:</span> El precio con impuestos será de aproximadamente <span class="total">${suma}</span> pesos.`;
        }
    }
