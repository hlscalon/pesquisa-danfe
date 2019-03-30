import React, { Component } from 'react';
import Upload from './upload/Upload.js';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            danfes: []
        };

        this.addDanfe = this.addDanfe.bind(this);
    }

    addDanfe(danfe) {
        this.setState(prevState => ({
            danfes: [...prevState.danfes, danfe]
        }));
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">Pesquisa em Danfes!</h1>
                    <Upload addDanfe={this.addDanfe} /><br />
                    <table className="table is-bordered is-fullwidth">
                        <thead>
                            <th campo="chNFe">Chave NFe</th>
                            <th campo="emit.xNome">Emissor</th>
                            <th campo="dest.xNome">Destinatário</th>
                        </thead>
                        <tbody>
                        {this.state.danfes.map(danfe =>
                            <tr>
                                <td campo="chNFe">{danfe.chNFe}</td>
                                <td campo="emit.xNome">{danfe.emit.xNome}</td>
                                <td campo="dest.xNome">{danfe.dest.xNome}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default App;
