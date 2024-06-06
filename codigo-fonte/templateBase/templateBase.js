searchButton.onclick = function () {
    localStorage.termPesq = JSON.stringify(searchBar.value)
    if (!window.location.href.endsWith('prestadores.html')) {
        window.location.href = ('../prestadores/prestadores.html');
    }
};