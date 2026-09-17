const produtos = [
  {
    id: 1,
    nome: "Teclado Mecânico",
    preco: 199.99,
    temDesconto: true,
    quantidade: 15,
  },
  {
    id: 2,
    nome: "Mouse Gamer",
    preco: 129.9,
    temDesconto: false,
    quantidade: 20,
  },
  {
    id: 3,
    nome: "Monitor 24 Polegadas",
    preco: 899.99,
    temDesconto: true,
    quantidade: 8,
  },
  {
    id: 4,
    nome: "Headset Gamer",
    preco: 249.99,
    temDesconto: true,
    quantidade: 12,
  },
  {
    id: 5,
    nome: "Webcam Full HD",
    preco: 179.9,
    temDesconto: false,
    quantidade: 7,
  },
  {
    id: 6,
    nome: "Mousepad Grande",
    preco: 89.99,
    temDesconto: true,
    quantidade: 25,
  },
  {
    id: 7,
    nome: "SSD 1TB",
    preco: 499.99,
    temDesconto: false,
    quantidade: 10,
  },
  {
    id: 8,
    nome: "Memória RAM 16GB",
    preco: 329.9,
    temDesconto: true,
    quantidade: 14,
  },
  {
    id: 9,
    nome: "Placa de Vídeo",
    preco: 1599.99,
    temDesconto: false,
    quantidade: 5,
  },
  {
    id: 10,
    nome: "Gabinete Gamer",
    preco: 399.9,
    temDesconto: true,
    quantidade: 9,
  },
];

const novosProdutos = produtos.map((produto) => {
    // ? -> se for verdadeiro
    // : -> se for falso
  const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;

    // Retorna um novo objeto com id, nome, preço atualizado se houver desconto e quantidade
  return {
    id: produto.id,
    nome: produto.nome,
    
    preco: novoPreco.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }),

    quantidade: produto.quantidade,
  };
});
console.log(novosProdutos);
