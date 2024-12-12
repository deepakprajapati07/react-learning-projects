import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  
  const { likes = 0, dislikes = 0 } = post.reactions || {};

  return (
    <div className="card postCard" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
            <span className="visually-hidden">delete post</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has {likes} likes and {dislikes} dislikes
        </div>
      </div>
    </div>
  );
};


export default Post;
