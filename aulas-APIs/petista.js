fetch("https://viacep.com.br/ws/89212-170/json/")
  .then((resposta) => resposta.json())
  .then((dados) => console.log(dados))
  .catch((erro) => console.error("Erro na requisição:", erro));