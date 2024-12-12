// import { useCallback } from "react";
// import { useMemo } from "react";
import { createContext, useReducer, useEffect, useState } from "react";

/*Contract Designing */
export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  // Normal Method -> It's reference will be different in each paint cycle
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  // useCallback will return the same reference of the method in each paint cycle unless the dependency changes
  /*
    const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }, [dispatchPostList]); 
  */

  // useMemo -> It is used so that the heavy computation does not get repeated unnecessary in each paint cycle unless the dependency changes

  /*
  const arr = [5, 2, 6, 7, 4]
  const sortedArr = useMemo(() => arr.sort(), [arr])
  */

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
