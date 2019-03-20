import React, { Component } from 'react';
import Upload from './upload/Upload.js';
import './App.css';

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
            <div className="App">
                <Upload addDanfe={this.addDanfe} />
                <ul className="list-group list-group-flush">
                {this.state.danfes.map(danfe =>
                    <li key={danfe.chNFe} className="list-group-item flex-container">
                        <p>{danfe.emit.xNome}</p><span>|</span><p>{danfe.dest.xNome}</p>
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default App;
