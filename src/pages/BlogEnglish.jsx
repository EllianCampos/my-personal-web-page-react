import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import Post from "../components/Post";
import BlogPost from "./BlogPost";

const BlogEnglish = () => {
  return (
    <>
      <header className="container-fluid bg-dark pb-2 text-center">
        <Link to="/" className="navbar-brand text-info fw-semibold fs-4">
          Ellian Campos C
        </Link>
        <h1 className="text-light">
          English blog - summaries about English grammar
        </h1>
      </header>
      <main>
        <h2>Summaries</h2>
        <section className="container">
          <Post name="Past Progressive " />
        </section>
      </main>
    </>
  );
};

export default BlogEnglish;