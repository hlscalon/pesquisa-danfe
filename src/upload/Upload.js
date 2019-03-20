import React, { Component } from 'react';

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploading: false
        };

        this.uploadFiles = this.uploadFiles.bind(this);
    }

    parseXmlDanfe(str) {
        let parser = new DOMParser();
        const xml = parser.parseFromString(str, "text/xml");

        if (xml.documentElement.nodeName === "parsererror") {
            // #todo: verificar erro

            console.log("xml error");
            console.log(xml);
        } else {
            var nfeProc = xml.getElementsByTagName("nfeProc")[0];
            var infNFe = nfeProc.getElementsByTagName("NFe")[0].getElementsByTagName("infNFe")[0];
            var infProt = nfeProc.getElementsByTagName("protNFe")[0].getElementsByTagName("infProt")[0];

            let danfe = {
                chNFe: infProt.getElementsByTagName("chNFe")[0].childNodes[0].nodeValue,
                emit: {
                    xNome: infNFe.getElementsByTagName("emit")[0].getElementsByTagName("xNome")[0].childNodes[0].nodeValue
                },
                dest: {
                    xNome: infNFe.getElementsByTagName("dest")[0].getElementsByTagName("xNome")[0].childNodes[0].nodeValue
                }
            };

            this.props.addDanfe(danfe);
        }
    }

    processFile(file) {
        var reader = new FileReader();
        reader.onload = (e) => { // arrow function por causa do this..
            this.parseXmlDanfe(e.target.result);
        };

        reader.onerror = (e) => {
            reader.abort();
        };

        reader.readAsText(file);
    }

    uploadFiles(event) {
        this.setState({
            uploading: true
        });

        const files = event.target.files;
        for (let i = 0; i < files.length; ++i) {
            const file = files[i];

            this.processFile(file);
        }

        // #todo: mostrar arquivos com erro de leitura
        // #todo: limpar botao upload (x arquivos selecionados)

        this.setState({
            uploading: false
        });
    }

    renderActions() {
        return (
            <input type="file" id="upload" multiple disabled={this.state.uploading} onChange={this.uploadFiles} />
        );
    }

    render() {
        return (
            <div className="Upload">
                {this.renderActions()}
            </div>
        );
    }
}

export default Upload;
