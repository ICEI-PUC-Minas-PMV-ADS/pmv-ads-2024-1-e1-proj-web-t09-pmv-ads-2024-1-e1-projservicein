searchButton.onclick = function () {
    localStorage.termPesq = JSON.stringify(searchBar.value)
    if (!window.location.href.endsWith('usuarioLogado.html')) {
        window.location.href = ('../usuarioLogado/usuarioLogado.html');
    }
};