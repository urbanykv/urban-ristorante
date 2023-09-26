import React from "react";
import './itemCardapio.css'

const ItemCardapio = props => {
    return(
        <div className="item-cardapio">
            <img src={props.imagem} alt={props.nome}/>
            <div className="info-produto">
                <h3 id="nome">{props.nome}</h3>
                <span id="categoria">{props.categoria}</span>
                <p id="desc">{props.descricao}</p>
                <span id="preco">R$ {props.preco}</span>
            </div>
        </div>
    )
}

export default ItemCardapio