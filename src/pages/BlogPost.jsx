import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "react-bootstrap";
import "../styles.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const BlogPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [numPag, setNumPag] = useState(1);

  // Obtiene la cadena de consulta de la URL
  const queryString = location.search;

  // Utiliza la clase URLSearchParams para analizar la cadena de consulta
  const params = new URLSearchParams(queryString);

  // Obtiene el valor de "name" de la cadena de consulta
  const name = params.get("name");

  const pdfUrl = `/pdfs/${name}.pdf`;

  return (
    <>
      <header className="container pt-3 pb-3">
        <Button className="btn btn-primary w-100 mb-2" onClick={() => navigate(-1)}>Volver</Button>
        <Button
          onClick={() => setNumPag(numPag - 1)}
          variant="secondary"
          className="w-50 "
        >
          Página anterior
        </Button>
        <Button
          onClick={() => setNumPag(numPag + 1)}
          variant="secondary"
          className="w-50"
        >
          Siguiente página
        </Button>
      </header>
      <main>
        <div>
          <Document file={pdfUrl}>
            <Page
              pageNumber={numPag}
              className="pagina"
              width={window.innerWidth}
              height={window.innerHeight}
            />
          </Document>
        </div>
      </main>
    </>
  );
};

export default BlogPost;
