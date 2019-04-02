import React, { Component } from 'react';

class FiltroCampos extends Component {
    render() {
        const campos = this.props.campos;
        const nomeCampos = Object.keys(this.props.campos);

        return (
            <div id="filtro-campos">
                {
                    nomeCampos.map(key => {
                        const campo = campos[key];
                        return (
                            <label className="checkbox" key={campo.nome}>
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
        );
    }
}

export default FiltroCampos;
