import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = (props) => {
  return (
    <>
      <Link to={`/blog/post?name=${props.name}`} className="btn btn-primary w-100 m-2">{props.name}</Link>
    </>
  );
};

export default Post;
