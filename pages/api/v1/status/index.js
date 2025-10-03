function status(request, response) {
  response.status(200).json({ mensagem: "Teste de acentuação" });
}

export default status;
