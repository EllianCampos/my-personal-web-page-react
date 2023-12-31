import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "react-bootstrap";
import "../styles.css";

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

  const [numPages, setNumPages] = useState(null);
  useEffect(() => {
    const fetchNumPages = async () => {
      const loadingTask = pdfjs.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      setNumPages(pdf.numPages);
    };

    fetchNumPages();
  }, [pdfUrl]);

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <Page
          key={i}
          pageNumber={i}
          width={window.innerWidth}
        />
      );
    }
    return pages;
  };

  return (
    <>
      <header className="container pt-3 pb-3">
        <Button
          className="btn btn-primary w-100 mb-2"
          onClick={() => navigate(-1)}
        >
          Volver
        </Button>
      </header>
      <main>
        <div>
          {numPages ? (
            <Document file={pdfUrl}>{renderPages()}</Document>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default BlogPost;
