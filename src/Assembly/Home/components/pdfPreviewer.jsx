/* eslint-disable */
// Pdf Renderer
import React, { PureComponent } from 'react';
import PDFViewer from 'mgr-pdf-viewer-react';

const manual = 'https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf';

// Declaration
class pdfPreviwer extends PureComponent {
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
export default pdfPreviwer;
