import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.css';

const style = {
    filtroCampos: {
        marginBottom: "10px",
    },
    filtroCamposCampos: {
        display: "none",
        marginLeft: "10px",
    },
    chkColuna: {
        marginRight: "5px",
    }
};

class FiltroCampos extends Component {
    pickColumns() {
        var div = document.getElementById("filtro-campos-campos");
        var btn = document.getElementById("btn-pick-columns");

        if (div.style.display === "none") {
            div.style.display = "inline";
            btn.innerHTML = "<i class=\"fas fa-times\"></i>";
        } else {
            div.style.display = "none";
            btn.innerHTML = "<i class=\"fas fa-bars\"></i>";
        }
    }

    render() {
        const campos = this.props.campos;
        const nomeCampos = Object.keys(this.props.campos);

        return (
            <div id="filtro-campos" style={style.filtroCampos}>
                <button id="btn-pick-columns" onClick={this.pickColumns}>
                    <i className="fas fa-bars"></i>
                </button>
                <div id="filtro-campos-campos" style={style.filtroCamposCampos}>
                {
                    nomeCampos.map(key => {
                        const campo = campos[key];
                        return (
                            <label className="checkbox" key={campo.nome} style={style.chkColuna}>
                                <input
                                    type="checkbox"
                                    key={campo.nome}
                                    defaultChecked={campo.ativo}
                                    onClick={() => this.props.change(campo.nome)}
                                />
                                {campo.descricao}
                            </label>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default FiltroCampos;
