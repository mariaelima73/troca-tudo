const buttonLogin = document.querySelector("#login");
const modal = document.querySelector("dialog");
const buttonFechar = document.querySelector("#fechar");
const buttonFechar2 = document.querySelector(".fechar");
buttonLogin.onclick = function() {
    modal.showModal();
}
buttonFechar.onclick = function() {
    modal.close();
}
buttonFechar2.onclick = function() {
    modal.close();
}
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

function fazerLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, senha})
    })
    .then(response => response.json())
    .then(data => {
        if (data.sucesso) {
            sessionStorage.setItem('usuarioLogado', JSON.stringify(data.usuario))
            modal.close()
            interfaceAtt()
        } else {
            alert(data.mensagem || 'Erro ao fazer login')
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error)
    })
}
function interfaceAtt() {
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'))
    if (usuarioLogado) {
        document.getElementById('nome-usuario').innerText = usuarioLogado.nome;
        document.getElementById('user-avatar').src = `/avatars/${usuarioLogado.avatar}`;
        document.getElementById('curtidas-usuario').textContent = usuarioLogado.curtidas || 0;
        document.getElementById('descurtidas-usuario').textContent = usuarioLogado.descurtidas || 0;
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    }
}
function fazerLogout() {
    sessionStorage.removeItem('usuarioLogado')
    document.getElementById('nome-usuario').innerText = "Usuário não logado";
    document.getElementById('user-avatar').src = "/avatars/account_circle.png";  // Voltando para o avatar padrão
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
    document.getElementById('curtidas-usuario').innerText = "0"
    document.getElementById('descurtidas-usuario').innerText = "0"
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    email.innerText = ""
    password.innerText = ""
}
window.onload = function() {
    interfaceAtt();
    carregarProdutos();
}

function carregarProdutos() {
    fetch('/produtos')
        .then(response => response.json())
        .then(produtos => {
            const produtosLista = document.getElementById('produtos')
            produtosLista.innerHTML = '';
            produtos.forEach(produto => {
                const produtoDiv = document.createElement('div')
                produtoDiv.classList.add('produto')
                produtoDiv.id = `produto-${produto.id}`
                //joao@email.com
                //123456
                produtoDiv.innerHTML = `
                <h3 class="titulo-produto">${produto.nome}</h3>
                    <div class="produto-img">
                        <img src="images/${produto.imagem}" alt="${produto.nome}">
                    </div>
                    <div class="acoes">
                        <div class="todas-acoes">
                            <img src="icons/thumb_up.svg" alt="Curtir" onclick="interagirProduto(${produto.id}, 'curtida')">
                            <h4 id="curtida-produto">${produto.curtidas}</h4>
                            <img src="icons/thumb_down.svg" alt="Descurtir" onclick="interagirProduto(${produto.id}, 'descurtida')">
                            <h4 id="descurtida-produto">${produto.descurtidas}</h4>
                            <img src="icons/comment.svg" alt="Comentar" onclick="verificarLoginOuComentar(${produto.id})">
                            <h4 id="comentario-produto">${produto.total_comentarios}</h4>
                        </div>
                        <div class="ultimo-comentario">
                            <h4 id="ultimo-comentario">Último comentário de: ${produto.cidade || 'N/A'}, ${produto.estado || 'N/A'}</h4>
                        </div>
                    </div>
                    

                `;
                produtosLista.appendChild(produtoDiv)
                console.log(produto.imagem)
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error)
        })
    interfaceAtt();
    carregarProdutos();
}