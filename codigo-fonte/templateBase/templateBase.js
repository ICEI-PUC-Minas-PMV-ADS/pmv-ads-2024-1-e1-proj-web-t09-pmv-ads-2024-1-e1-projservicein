searchButton.onclick = function(){
    let pesquisa = searchBar.value;
    localStorage.termPesq = JSON.stringify(pesquisa)
};