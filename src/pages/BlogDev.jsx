import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import Post from "../components/Post";
import BlogPost from "./BlogPost";

const BlogDev = () => {
  return (
    <>
      <header className="container-fluid bg-dark pb-2 text-center">
        <Link to="/" className="navbar-brand text-info fw-semibold fs-4">
          Ellian Campos C
        </Link>
        <h1 className="text-light">
          dev Blog - Find summaries about Software Development 
        </h1>
      </header>
      <main>
        <h2>Summaries</h2>
        <section className="container">
          <Post name="Guía conexiones remotas, copias y reportes MySQL" />
        </section>
      </main>
    </>
  );
};

export default BlogDev;