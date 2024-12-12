import { createContext, useReducer } from "react";

/*Contract Designing */
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Vrindavan",
    body: "Hi, friends, I am going to Vrindavan for experiencing the spirituality of the city.",
    reactions: 2,
    userId: "user-1",
    tags: ["vacation", "Vrindavan", "Temple", "Spirituality"],
  },
  {
    id: "2",
    title: "Going to Ayudhaya",
    body: "Hi, friends, I am going to Ayudhaya to see Ram Mandir",
    reactions: 5,
    userId: "user-2",
    tags: ["vacation", "Ayudhaya", "Temple", "Ram Mandir"],
  },
];

export default PostListProvider;
