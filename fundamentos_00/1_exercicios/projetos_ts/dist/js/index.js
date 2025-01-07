const elementForm = document.querySelector("form");
const inputElementMsg = document.querySelector("#msg");
const buttoElement = document.querySelector(".btn_magica");
const elementResultado = document.querySelector(".magica");
elementForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const txt_mensagem = inputElementMsg.value;
    // adcionando a mensagem no elemento
    elementResultado.textContent = `Voce disse: ${txt_mensagem}`;
    this.reset();
});
