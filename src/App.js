import React, { Component } from 'react';
import Upload from './upload/Upload.js';
import Dashboard from './dashboard/Dashboard.js';
import FiltroCampos from './filtros/FiltroCampos.js';

// css
import 'bulma/css/bulma.min.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            danfes: [],
            campos: {
                "chNFe": {nome: "chNFe", descricao: "Chave NFe", ativo: true},
                "emit.xNome": {nome: "emit.xNome", descricao: "Emissor", ativo: false},
                "dest.xNome": {nome: "dest.xNome", descricao: "Destinatário", ativo: true}
            }
        };

        this.addDanfe = this.addDanfe.bind(this);
        this.changeFiltroCampo = this.changeFiltroCampo.bind(this);
    }

    addDanfe(danfe) {
        let add = true;
        let danfes = this.state.danfes;
        for (var i = 0; i < danfes.length; i++) {
            let d = danfes[i];
            if (d.chNFe === danfe.chNFe) {
                add = false;
                break;
            }
        }

        if (add) {
            this.setState(prevState => ({
                danfes: [...prevState.danfes, danfe]
            }));
        }
    }

    changeFiltroCampo(campo) {
        if (typeof this.state.campos[campo] !== "undefined") {
            // shallow copy dos campos
            let campos = {...this.state.campos};
            // shallow copy do campo
            let c = {...campos[campo]};
            // altera o valor e coloca no objeto de volta
            c.ativo = !c.ativo;
            campos[campo] = c;
            // altera o state com o campo novo
            this.setState({campos});
        }
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">Pesquisa em Danfes!</h1>
                    <Upload addDanfe={this.addDanfe} /><br />
                    <FiltroCampos campos={this.state.campos} change={this.changeFiltroCampo} />
                    <Dashboard danfes={this.state.danfes} campos={this.state.campos} />
                </div>
            </section>
        );
    }
}

export default App;
