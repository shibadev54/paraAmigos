// Ainda faltar terminar e melhorar algumas coisas

const buscar = document.getElementById("buscarUsuario");
const buscarTodosUsuarios = document.getElementById("buscarTodosUsuarios");
const resultado = document.getElementById("resultado");

async function buscarDados() {
  try {
    const idUsuario = Number(document.getElementById("idUsuario").value);

    if (idUsuario == "") {
      resultado.innerHTML = "Digite um id";

      return;
    }
    const resposta = await fetch(
      "https://raw.githubusercontent.com/shibadev54/paraAmigos/refs/heads/main/Paulo/Promises/usuarios.json",
    );

    if (!resposta.ok) {
      throw new Error(`HTTP: ${resposta.status}`);
    }

    const dados = await resposta.json();

    const procurarUsuario = dados.find((item) => item.id === idUsuario);

    if (procurarUsuario !== undefined) {
      return {
        id: idUsuario,
        usuario: procurarUsuario,
      };
    } else {
      resultado.innerHTML = "Nenhum usuario foi encontrado";
    }
  } catch (erro) {
    resultado.innerHTML = erro.message;
  }
}

buscar.addEventListener("click", () => {
  buscarDados().then((dados) => {
    if (dados !== undefined) {
      resultado.innerHTML = `
  <div>
    <h2>ID: ${dados.id}</h2>
    <p>Nome: ${dados.usuario.nome}</p>
    <p>Idade: ${dados.usuario.idade}</p>
    <p>infoPessoal:</p>
    <p>CPF: ${dados.usuario.infoPessoal.cpf}</p>
    <p>Endereço:</p>
    <p>Rua: ${dados.usuario.infoPessoal.endereco.rua}</p>
    <p>Numero: ${dados.usuario.infoPessoal.endereco.numero}</p>
  </div>
`;
    }
  });
});

buscarTodosUsuarios.addEventListener("click", () => {
  try {
    async function todosUsuarios() {
      const resposta = await fetch(
        "https://raw.githubusercontent.com/shibadev54/paraAmigos/refs/heads/main/Paulo/Promises/usuarios.json",
      );

      const dados = await resposta.json();

      resultado.innerHTML = dados
        .map(
          (usuario) => `
   <div>
    <h2>ID: ${usuario.id}</h2>
    <p>Nome ${usuario.nome}</p>
  </div>
  `,
        )
        .join("");
    }
    todosUsuarios();
  } catch (erro) {
    resultado.innerHTML = erro.message;
  }
});
