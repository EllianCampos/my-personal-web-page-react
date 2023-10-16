import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Instagram, Github, Linkedin, Display } from "react-bootstrap-icons";
import { Row, Col, Image } from "react-bootstrap";
import MyProfilePhoto from "../assets/MyProfilePhoto.jpg";

import { useState, useEffect } from "react";

const Home = () => {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/EllianCampos/repos")
      .then((res) => res.json())
      .then((res) => {
        setProyects(res);
      });
  }, []);
  // "min-vh-100 d-flex flex-column align-items-center justify-content-center"
  return (
    <>
      <header
        style={{ background: "#111" }}
        className="min-vh-100 d-flex flex-column align-items-center justify-content-center"
      >
        <Row
          style={{ background: "#000" }}
          className="container-fluid position-fixed fixed-top text-light m-0 p-0 pt-2"
        >
          <Col xs={7}>
            <h2>Ellian Campos C</h2>
          </Col>  
          <Col xs={5} className=" mts-1">
            <a
              href="https://www.instagram.com/elliangcc/"
              target="_blank"
              className="p-1"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://github.com/EllianCampos"
              target="_blank"
              className="p-1"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/ellian-campos-ceciliano-0b741b241"
              target="_blank"
              className="p-1"
            >
              <Linkedin size={32} />
            </a>
          </Col>
        </Row>
        <Row className="w-100 d-flex justify-content-center">
          <div className="col-auto text-center" style={{ width: "150px" }}>
            <Image src={MyProfilePhoto} roundedCircle width={100} />
          </div>
          <p
            style={{ fontSize: "1.5em" }}
            className="col-auto text-sm-start text-center text-light lead mt-auto mb-auto"
          >
            Hello my name is
            <span style={{ color: "#61afef" }} className="fw-bold">
              {" "}
              Ellian Campos Ceciliano
              <br />
            </span>
            I'm a Systems Engineering Student
          </p>
        </Row>
      </header>

      <main style={{ backgroundColor: "#23272e" }}>
        <section className="container text-light">
          <h2 className="text-center pt-5">
            Proyectos Online que puedes probar
          </h2>
          <article className="pt-5">
            <h3 style={{ color: "#61afef" }}>
              Sistema de Gestión de Estacionamientos
            </h3>
            <p>
              Sistema para gestionar el tiempo que permanecen estacionados lo
              vehículos.
              <br />
              Almacena los datos en el local storage del navegador.
            </p>
            <a
              href="https://ellianparking.netlify.app/"
              target="_blank"
              className="btn btn-success"
            >
              Probarlo
            </a>
          </article>
        </section>

        <section className="container text-light pb-5">
          <h2 className="text-center pt-5">Proyectos de Git Hub</h2>
          {proyects.map((proyect) => (
            <article key={proyect.id} className="pt-5">
              <h3>
                <a
                  style={{ color: "#61afef", textDecoration: "none" }}
                  href={proyect.html_url}
                  target="_blank"
                >
                  {proyect.name}
                </a>
              </h3>
              <p>{proyect.description}</p>
            </article>
          ))}
        </section>

        <section className="container text-light pt-5 pb-5">
            <h2 className="text-center">Mi blog</h2>
            <p>En la seccion de blog encontraras resumenes academicos de diferentes tematicas</p>
            <Row>
              <Col>
                <Link to="/blog-english" className="btn btn-success">Ir al blog de Inglés</Link>  
              </Col>
              <Col>
                <Link to="/blog-dev" className="btn btn-success">Ir al blog de desarrollo</Link>
              </Col>
            </Row>
        </section>
      </main>
    </>
  );
};

export default Home;
