function calcular() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const casasDecimais = parseInt(document.getElementById('casasDecimais').value);
  
    console.log("Valores recebidos:", a, b, c, casasDecimais); // Verifique os valores recebidos
  
    const delta = b ** 2 - 4 * a * c;
    console.log("Delta calculado:", delta); // Verifique o delta calculado
  
    const resultElement = document.querySelector('.result');
    const x1Element = document.querySelector('.x1');
    const x2Element = document.querySelector('.x2');
    const deltaElement = document.querySelector('.delta');
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultElement.innerText = "Por favor, insira valores válidos.";
      x1Element.innerText = "";
      x2Element.innerText = "";
      deltaElement.innerText = "";
    } else {
      resultElement.innerText = ""; // Limpa o resultado anterior
      x1Element.innerText = ""; // Limpa o resultado anterior
      x2Element.innerText = ""; // Limpa o resultado anterior
      deltaElement.innerText = ""; // Limpa o resultado anterior
  
      if (delta < 0) {
        deltaElement.innerText = Delta = ${delta.toFixed(casasDecimais)}. A equação não possui raízes reais.;
      } else if (delta === 0) {
        const x = -b / (2 * a);
        x1Element.innerText = X1 = X2 = ${x.toFixed(casasDecimais)};
        deltaElement.innerText = Delta = ${delta.toFixed(casasDecimais)}. A equação possui uma raiz real.;
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
        console.log("Valores calculados:", x1, x2); // Verifique os valores calculados
  
        x1Element.innerText = X1 = ${x1.toFixed(casasDecimais)};
        x2Element.innerText = X2 = ${x2.toFixed(casasDecimais)};
        deltaElement.innerText = Delta = ${delta.toFixed(casasDecimais)}. A equação possui duas raízes reais.;
      }
    }
  }
  
  document.querySelector('.calcular').addEventListener('click', calcular);
  
  function limparCampos() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('casasDecimais').value = '';
  
    document.querySelector('.result').innerText = '';
    document.querySelector('.x1').innerText = '';
    document.querySelector('.x2').innerText = '';
    document.querySelector('.delta').innerText = '';
  }