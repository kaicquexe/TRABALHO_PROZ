function verificarRespostas() {
    var respostasCorretas = 0;
    
    // Verificar resposta da pergunta 1
    var pergunta1Resposta = document.querySelector('input[name="pergunta1"]:checked');
    if (pergunta1Resposta && pergunta1Resposta.value === 'opcao1') {
      respostasCorretas++;
    }
    
    // Verificar resposta da pergunta 2
    var pergunta2Resposta = document.querySelector('input[name="pergunta2"]:checked');
    if (pergunta2Resposta && pergunta2Resposta.value === 'opcao3') {
      respostasCorretas++;
    }
    
    // Verificar resposta da pergunta 3
    var pergunta3Resposta = document.querySelector('input[name="pergunta3"]:checked');
    if (pergunta3Resposta && pergunta3Resposta.value === 'opcao2') {
      respostasCorretas++;
    }

    // Verificar resposta da pergunta 4
    var pergunta4Resposta = document.querySelector('input[name="pergunta4"]:checked');
    if (pergunta4Resposta && pergunta4Resposta.value === 'opcao4') {
      respostasCorretas++;
    }

    // Verificar resposta da pergunta 5
    var pergunta5Resposta = document.querySelector('input[name="pergunta5"]:checked');
    if (pergunta5Resposta && pergunta5Resposta.value === 'opcao2') {
      respostasCorretas++;
    }

    // Verificar resposta da pergunta 6
    var pergunta6Resposta = document.querySelector('input[name="pergunta6"]:checked');
    if (pergunta6Resposta && pergunta6Resposta.value === 'opcao3') {
      respostasCorretas++;
    }

    // Verificar resposta da pergunta 7
    var pergunta7Resposta = document.querySelector('input[name="pergunta7"]:checked');
    if (pergunta7Resposta && pergunta7Resposta.value === 'opcao1') {
      respostasCorretas++;
    }

    // Verificar resposta da pergunta 8
    var pergunta8Resposta = document.querySelector('input[name="pergunta8"]:checked');
    if (pergunta8Resposta && pergunta8Resposta.value === 'opcao3') {
      respostasCorretas++;
    }

    // Verificar resposta da pergunta 9
    var pergunta9Resposta = document.querySelector('input[name="pergunta9"]:checked');
    if (pergunta9Resposta && pergunta9Resposta.value === 'opcao1') {
      respostasCorretas++;
    }

    // Verificar resposta da pergunta 10
    var pergunta10Resposta = document.querySelector('input[name="pergunta10"]:checked');
    if (pergunta10Resposta && pergunta10Resposta.value === 'opcao4') {
      respostasCorretas++;
    }
    
    // Exibir resultado
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Você acertou ' + respostasCorretas + ' de 10 perguntas.';
  }

 
  