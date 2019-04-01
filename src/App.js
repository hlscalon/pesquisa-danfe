import React, { Component } from 'react';
import Upload from './upload/Upload.js';
import Dashboard from './dashboard/Dashboard.js';

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

    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">Pesquisa em Danfes!</h1>
                    <Upload addDanfe={this.addDanfe} /><br />
                    <Dashboard danfes={this.state.danfes} campos={this.state.campos} />
                </div>
            </section>
        );
    }
}

export default App;
