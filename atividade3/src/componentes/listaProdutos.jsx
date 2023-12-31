import { useState } from "react";
export default function Produtos(props) {
  let tema = props.tema;
  let red = props.red;
  let green = props.green;

  class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }

  const [edit, setEdit] = useState(false);
  const [produtos, setProdutos] = useState([
    new Produto("Produto 1", "50"),
    new Produto("Produto 2", "30"),
    new Produto("Produto 3", "15"),
    new Produto("Produto 4", "10"),
    new Produto("Produto 5", "05")
  ]);
  const [editingProduto, setEditingProduto] = useState(0);
  const [editingProdutoIndex, setEditingProdutoIndex] = useState(0);

  const handleInputChange = (e, field) => {
    let edProduto = editingProduto;
    edProduto[field] = e.target.value;
    setEditingProduto(edProduto);
  };

  const handleEdit = (e) => {
    if (edit) {
      setEdit(false);
      let produts = produtos;
      produts[editingProdutoIndex] = editingProduto;
    } else {
      setEdit(true);
      setEditingProdutoIndex(e.target.value);
      setEditingProduto(produtos[e.target.value]);
      console.log(editingProduto);
    }
    e.preventDefault();
  };
  let c = 0;
  console.log(produtos);

  let lista = produtos.map((produto) => {
    c += 1;
    return (
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseOne${c}`}
            aria-expanded="true"
            aria-controls={`collapseOne${c}`}
          >
            {produto.nome}
          </button>
        </h2>
        <div
          id={`collapseOne${c}`}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="input-group mt-3">
              <span className="input-group-text" style={{ background: tema }}>R$</span>
              <input
                type="text"
                className="form-control"
                value={produto.preco}
                aria-label="Amount (to the nearest dollar)"
                disabled={!edit}
                onChange={(e) => handleInputChange(e, "preco")}
              />
              <span className="input-group-text">.00</span>
            </div>
            <div className="input-group mb-3">
              <a href="!!">
                <button
                  className="input-group-text"
                  style={{ background: red }}
                > Deletar
                  <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
                </button>
              </a>
              <a href="!!">
                <button
                  className="input-group-text"
                  style={{ background: green }}
                  value={produtos.indexOf(produto)}
                  onClick={handleEdit}
                > Salvar
                  <i className="bi bi-pencil" style={{ fontSize: 20 }}></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid">
      <h5>Cadastro de Produto</h5>
      <hr />
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome do Produto"
            aria-label="Nome do Produto"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" style={{ background: tema }}>R$</span>
          <input
            type="text"
            placeholder="Preço"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span className="input-group-text">.00</span>
        </div>
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            style={{ background: tema }}
          >
            Cadastrar novo Produto
          </button>
        </div>
      </form>
      <div className="list-group">
        <div className="accordion" id="accordionExample">
          {lista}
        </div>
      </div>
      <br />
      <h5>Produtos mais Consumidos em Quantidade</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <i className="bi bi-award-fill" style={{ fontSize: 20 }}></i> Produto 1
        </li>
        <li className="list-group-item">
          <i className="bi bi-award-fill" style={{ fontSize: 20 }}></i> Produto 2
        </li>
        <li className="list-group-item">
          <i className="bi bi-award-fill" style={{ fontSize: 20 }}></i> Produto 3
        </li>
        <li className="list-group-item">Produto 4</li>
        <li className="list-group-item">Produto 5</li>
      </ul>
      <br />
    </div>
  );
}
