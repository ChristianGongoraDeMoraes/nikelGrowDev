(function onAccess(){
    let logged = localStorage.getItem("session");
    let loggedSession = sessionStorage.getItem("session");
    logged = JSON.parse(logged)

    if( !logged && !loggedSession) {
        window.location.href = "index.html";
    }

    sessionStorage.setItem("session", JSON.stringify(logged));
}())

document.getElementById("button-sair").addEventListener("click", (e)=>{
    e.preventDefault();
    logout();
});


function logout(){
    let localStoragelogged = localStorage.getItem("session");
    let sessionStorageloggede = localStorage.getItem("session");
    if(localStoragelogged) localStorage.removeItem("session");
    if(sessionStorageloggede) sessionStorage.removeItem("session");

    window.location.href = "index.html";
}


document.getElementById("transaction-form").addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let valor = parseFloat(document.getElementById("transactionInputValor1").value);
    let descricao = document.getElementById("transactionInputDescricao1").value;
    let data = document.getElementById("transactionInputDate1").value;
    let type = document.querySelector('input[name="type-input"]:checked').value;

    let dataSession = sessionStorage.getItem("session");
    dataSession = JSON.parse(dataSession)
    let DatabaselocalStorage = localStorage.getItem(dataSession.email);
    DatabaselocalStorage = JSON.parse(DatabaselocalStorage)

    DatabaselocalStorage.transactions.unshift({
        valor, type,  descricao, data
    });

    sessionStorage.setItem("session", JSON.stringify(DatabaselocalStorage));
    localStorage.setItem(dataSession.email, JSON.stringify(DatabaselocalStorage));

    if(localStorage.getItem("session")){
        localStorage.setItem("session", JSON.stringify(DatabaselocalStorage))
    }

    alert("Lançamento adicionado com sucesso !")
});