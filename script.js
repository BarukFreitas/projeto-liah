function expandirBox(nome) {
    const container = document.querySelector(`.box-${nome}`);
    container.classList.toggle('expandido');
}
