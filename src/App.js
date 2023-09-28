import { useState } from 'react';
import './App.css';
import ItemCardapio from './components/itemcardapio/script';
import produtos from './data-produtos';

function App() {

  const entradas = produtos.filter( produto => 
    produto.categoria === 'Entradas')

  const [itensCardapio, setItensCardapio] = useState(entradas);
  const [textoBusca, setTextoBusca] = useState("");

  const filtrarProdutos = categoria => {
    setItensCardapio(produtos.filter( produto => 
      produto.categoria === categoria
    ))
    setTextoBusca("")
  }

  const buscarItem = text => {
    setTextoBusca(text)
    if(text === ""){
      setItensCardapio(entradas)
    }else if(text !== ""){
      setItensCardapio(produtos.filter( produto => 
        produto.nome.toLowerCase().includes(text.toLowerCase())
        ))
    }
  }

  return (
    <div className="App">
      <header className='header'>
        <h1>Urban's Ristorante</h1>
        <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.</p>
      </header>
      <main>
        <section className="busca-e-filtragem">
          <nav className='nav-btn'>
            <button className='btns' onClick={() => filtrarProdutos('Entradas')}><img src='assets/entrada.png' alt='Entradas Icon'/>Entradas</button>
            <button className='btns' onClick={() => filtrarProdutos('Massas')}><img src='assets/massa.png' alt='Massas Icon'/>Massas</button>
            <button className='btns' onClick={() => filtrarProdutos('Carnes')}><img src='assets/carne.png' alt='Carnes Icon'/>Carnes</button>
            <button className='btns' onClick={() => filtrarProdutos('Bebidas')}><img src='assets/bebidas.png' alt='Bebidas Icon'/>Bebidas</button>
            <button className='btns' onClick={() => filtrarProdutos('Saladas')}><img src='assets/salada.png' alt='Saladas Icon'/>Saladas</button>
            <button className='btns' onClick={() => filtrarProdutos('Sobremesas')}><img src='assets/sobremesa.png' alt='Sobremesas Icon'/>Sobremesas</button>
          </nav>
          <input type='text' id='buscaMenu' value={textoBusca} onChange={(event) => buscarItem(event.target.value)} placeholder='Pesquise aqui um dos pratos do nosso cardápio'/>
        </section>
        <section className='listagem-cardapio'>
          <h2>Cardápio</h2>
            <div className="cardapio">
              {
                itensCardapio.map(produto => (
                  <ItemCardapio
                    key={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    descricao={produto.descricao}
                    categoria={produto.categoria}
                    preco={produto.preco}
                  />
                ))
              }
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
