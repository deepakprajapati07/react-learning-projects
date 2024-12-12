import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = parseInt(userIdElement.current.value.trim(), 10);
    const postTitle = postTitleElement.current.value.trim();
    const postBody = postBodyElement.current.value.trim();
    const likes = parseInt(likesElement.current.value.trim(), 10) || 0;
    const dislikes = parseInt(dislikesElement.current.value.trim(), 10) || 0;
    const tags = tagsElement.current.value
      .trim()
      .split(/\s+/)
      .filter((tag) => tag);

    // Basic validation
    if (!userId || !postTitle || !postBody) {
      alert("User ID, Title, and Post Content are required fields.");
      return;
    }

    const reactions = { likes, dislikes };

    // Clear form inputs
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";

    // Add the post
    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3 item">
        <label htmlFor="userId" className="form-label">
          Enter your User ID here
        </label>
        <input
          type="number"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User ID"
        />
      </div>

      <div className="mb-3 item">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3 item">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>

      <div className="mb-3 item">
        <label htmlFor="likes" className="form-label">
          Number of Likes
        </label>
        <input
          type="number"
          ref={likesElement}
          className="form-control"
          id="likes"
          placeholder="Number of likes"
        />
      </div>

      <div className="mb-3 item">
        <label htmlFor="dislikes" className="form-label">
          Number of Dislikes
        </label>
        <input
          type="number"
          ref={dislikesElement}
          className="form-control"
          id="dislikes"
          placeholder="Number of dislikes"
        />
      </div>

      <div className="mb-3 item">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
