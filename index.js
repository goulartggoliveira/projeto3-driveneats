function selecionarCard(elemento, nomeClasse) {
  const select = document.querySelector(`.${nomeClasse} .selecionado`);
  if (select !== null) select.classList.toggle("selecionado");

  if (select !== elemento) elemento.classList.add("selecionado");
  verificaSeTemTresSelecionados();
}

function verificaSeTemTresSelecionados() {
  let lista = document.querySelectorAll(".selecionado");
  const fecharPedido = document.querySelector("button");
  if (lista.length == 3) {
    fecharPedido.classList.add("pedidoFinalizado");
    fecharPedido.innerHTML = "Fechar pedido";
  } else {
    fecharPedido.classList.remove("fecharPedido");
    fecharPedido.innerHTML = "Selecione os 3 itens para fechar o pedido";
  }
}

function mensagemWhatsapp() {
  const prato = document.querySelector(
    ".prato .selecionado .food-name"
  ).textContent;
  const bebida = document.querySelector(
    ".bebida .selecionado .food-name"
  ).textContent;
  const sobremesa = document.querySelector(
    ".sobremesa .selecionado .food-name"
  ).textContent;
  let custoPrato = document.querySelector(
    ".prato .selecionado .food-price"
  ).textContent;
  let custoBebida = document.querySelector(
    ".bebida .selecionado .food-price"
  ).textContent;
  let custoSobremesa = document.querySelector(
    ".sobremesa .selecionado .food-price"
  ).textContent;

  custoPrato = Number(custoPrato.replace(",", "."));
  custoBebida = Number(custoBebida.replace(",", "."));
  custoSobremesa = Number(custoSobremesa.replace(",", "."));
  let custoTotal = (custoPrato + custoBebida + custoSobremesa).toFixed(2);
  let messege1 = "https://wa.me/5521991398436?text=";
  let messege2 = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \n  Total: ${custoTotal}`;
  console.log(messege2);
  let encoded = encodeURIComponent(messege2);

  window.open(messege1 + encoded, "_blank");
}
