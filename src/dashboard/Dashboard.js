import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        const campos = this.props.campos;
        const nomeCampos = Object.keys(this.props.campos);

        let danfesList = "";
        this.props.danfes.map(danfe => {
            danfesList += "<tr>";
            nomeCampos.map((key, i) => {
                const campo = campos[key];
                if (campo.ativo) {
                    danfesList += "<td campo=" + campo.nome + ">" + danfe[campo.nome] + "</td>";
                }

                return null;
            });
            danfesList += "</tr>";

            return null;
        });

        return (
            <table className="table is-bordered is-fullwidth">
                <thead>
                    <tr>
                    {
                        nomeCampos.map((key, i) => {
                            const campo = campos[key];
                            if (campo.ativo) {
                                return <th key={campo.nome} campo={campo.nome}>{campo.descricao}</th>
                            }
                            return null;
                        })
                    }
                    </tr>
                </thead>
                <tbody dangerouslySetInnerHTML={{__html: danfesList}}></tbody>
            </table>
        );
    }
}

export default Dashboard;
