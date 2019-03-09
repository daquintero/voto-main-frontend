// Pdf Renderer
import React, { PureComponent } from 'react';
import axios from 'axios';
import PDFViewer from 'mgr-pdf-viewer-react';

const manual = 'https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf';

// Declaration
class Whatever extends PureComponent {
  componentDidMount() {
    this.getPDF();
  }

  getPDF = () => {
    axios.get('https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf')
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  render() {
    return (
      <div>
        <PDFViewer
          document={{ url: manual }}
          scale={0.9}
          css="customViewer"
          navigation={{
            css: {
              previousPageBtn: 'customPrevBtn',
              nextPageBtn: 'customNextBtn',
              pages: 'customPages',
              wrapper: 'customWrapper',
            },
          }}
        />
      </div>
    );
  }
}

// TODO State Store Connection
export default Whatever;
