import { useState } from "react";

export default function ListaCliente(props) {
  let tema = props.tema;
  let red = props.red;
  let green = props.green;

  class Cliente {
    constructor(nome, nomeSocial, rg, cpf, email) {
      this.nome = nome;
      this.nomeSocial = nomeSocial;
      this.rg = rg;
      this.cpf = cpf;
      this.email = email;
    }
  }

  const [edit, setEdit] = useState(false);
  const [clientes, setClientes] = useState([
    new Cliente("Caio","Caio", "5555555555", "CPF1", "ASD1"),
    new Cliente("Antônio", "Antônio", "222222222", "CPF2", "ASD2"),
    new Cliente("Julia", "Julia", "111111111", "CPF1", "ASD1"),
    new Cliente("Katia", "Katia", "999999999", "CPF2", "ASD2"),
  ]);
  const [editingClient, setEditingClient] = useState({ nome: "", raça: "" });
  const [editingClientIndex, setEditingClientIndex] = useState(0);

  const handleInputChange = (e, field) => {
    setEditingClient({ ...editingClient, [field]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEdit = (index) => {
    if (edit) {
      setEdit(false);
      setClientes((prevClientes) => {
        const newClientes = [...prevClientes];
        newClientes[editingClientIndex] = editingClient;
        return newClientes;
      });
    } else {
      setEdit(true);
      setEditingClientIndex(index);
      setEditingClient(clientes[index]);
    }
  };
  let c = 0;
  console.log(clientes);

  const lista = clientes.map((cliente, index) => {
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
            {cliente.nome}
          </button>
        </h2>
        <div
          id={`collapseOne${c}`}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="(Nome completo)"
                  value={editingClient.nome}
                  aria-label="Cliente"
                  aria-describedby="basic-addon1"
                  disabled={!edit}
                  onChange={(e) => handleInputChange(e, "nome")}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="(Nome Social)"
                  value={editingClient.nomeSocial}
                  aria-label="Nome Social"
                  aria-describedby="basic-addon1"
                  disabled={!edit}
                  onChange={(e) => handleInputChange(e, "nomeSocial")}
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="basic-addon1"
                  style={{ background: tema }}
                >
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="(E-mail)"
                  value={editingClient.email}
                  aria-label="E-mail"
                  aria-describedby="basic-addon1"
                  disabled={!edit}
                  onChange={(e) => handleInputChange(e, "email")}
                />
              </div>
              <div className="input-group mb-3">
                <a href="!!">
                  <button
                    className="input-group-text"
                    data-bs-trigger="hover focus"
                    data-bs-content="Clique aqui para editar"
                    style={{ background: green }}
                    onClick={() => handleEdit(index)}
                  > Salvar
                    <i className="bi bi-pencil" style={{ fontSize: 20, }}></i>
                  </button>
                </a>
                <a href="!!">
                  <button
                    className="input-group-text"
                    style={{ background: red }}
                  >Deletar
                    <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
                  </button>
                </a>
              </div>
              <div className="col-md-11">
                <label htmlFor="inputState" className="form-label">
                  Selecionar Pet
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Escolha uma opção...</option>
                  <option>Pet 1</option>
                  <option>Pet 2</option>
                  <option>Pet 3</option>
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="inputState" className="form-label">
                  Solicitar Serviço
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Escolha uma opção...</option>
                  <option>Serviço 1</option>
                  <option>Serviço 2</option>
                  <option>Serviço 3</option>
                  <option>Serviço 4</option>
                  <option>Serviço 5</option>
                </select>
              </div>
              <div className="col-md-1">
                <label htmlFor="inputState" className="form-label">
                  Quantidade
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder=""
                  aria-label="Quantidade"
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="inputState" className="form-label">
                  Solicitar Produto
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Escolha uma opção...</option>
                  <option>Produto 1</option>
                  <option>Produto 2</option>
                  <option>Produto 3</option>
                  <option>Produto 4</option>
                  <option>Produto 5</option>
                </select>
              </div>
              <div className="col-md-1">
                <label htmlFor="inputState" className="form-label">
                  Quantidade
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder=""
                  aria-label="Quantidade"
                />
              </div>
              <div className="col-md-1">
                <button
                  className="btn btn-outline"
                  type="button"
                  style={{ background: tema }}
                >
                  Fazer Pedido
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <h5>Lista com todos os clientes</h5>
      <hr />
      <div className="list-group">
        <div className="accordion" id="accordionExample">
          {lista}
        </div>
      </div>
      <br />
      <form className="row">
        <div className="col">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline"
              type="button"
              style={{ background: tema }}
              onClick={(e) => props.seletorView("Buscar Tutor", e)}
            >
              Atualizar/Editar um Pet
            </button>
          </div>
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline"
              type="button"
              style={{ background: tema }}
              onClick={(e) => props.seletorView("Mais Consumidos", e)}
            >
              Produtos & Serviços mais consumidos
            </button>
          </div>
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline"
              type="button"
              style={{ background: tema }}
              onClick={(e) => props.seletorView("Pagamento", e)}
            >
              Ir para Pagamento
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
