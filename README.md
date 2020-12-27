# Calculator - Node and Express
Calculadora criada usando Node.js e Express para fins acadêmicos

# Dependências Utilizadas
--------------------------------
//Express -> npm install express (utlizada como framework do node para criar o servidor);

//Body Parser -> npm install body-parser (utlizado para pegar os valores digitados no Form HTML, funcionando junto com a resquisição da função anônima do método post)

# Operadores Utilizados
----------------------------------
//eval() -> Esse operador converte funções matemáticas que são trazidas como strings. Foi utilizado na saída da variável "result"


# Explicando os comandos utilizados
------------------------------------

//const express = require('express'); -> Cria uma instância do Express no projeto.

//const app = express(); -> Atribui o módulo do Express para a variável "app", para que seja acessado os seus métodos e propriedades

//app.listen(3000, function(){}) -> Inicia o servidor dizendo em qual porta ele irá iniciar (primeiro parâmetro) e a função de callback que irá dizer no console o que acontecerá quando o servidor iniciar (no caso em questão, ele irá exibir a mensagem "Server running on localhost:3000")

//app.get('/', function(req, res){}) -> O método aceita dois parâmetros, o primeiro é a rota que o browser fará a requisição (no caso aqui seria a home - "/") e o segundo é uma função callback que dirá o que acontecerá quando o servidor retornar a response (resposta) da resquisição

//app.get('/', function(res, req){
  res.sendFile(__dirname + "/index.html");
}) -> O primeiro parâmetro "__dirname" pega automaticamente o diretório no qual o arquivo se encontra, sem a necessidade de mudança manual. A vantagem é que se houver o deploy da aplicação ele pegará automaticamente o caminho do diretório no servidor onde o arquivo que ele está retornando se encontra. O segundo parâmetro é o arquivo em si, que juntando com o nome do diretório automático consegue ser acessado de forma, também, automática

-----------------------------------
