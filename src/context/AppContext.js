import { createContext, useContext, useState } from "react";
import forumData from "../data/forumData"
const AppContext = createContext();
export const AppProvider = ({ children }) => {
const {posts:userPosts} = forumData;
const [posts, setPosts] = useState(userPosts);
const [sortedBy, setSortedBy] = useState("Latest posts");
const upvotePost = (id) => {
    const upvotedPosts = posts?.map((post) => {
        if(post.postId === id) {
            return {...post, upvotes: post.upvotes + 1};
        }
        return post;
    });
    setPosts(upvotedPosts);
}
const downvotePost = (id) => {
    const downvotedPosts = posts?.map((post) => {
        if(post.postId === id) {
            return {...post, upvotes: post.upvotes - 1};
        }
        return post;
    });
    setPosts(downvotedPosts);
}

const bookmarkPost = (id) => {
    const bookmarkedPosts = posts?.map((post) => {
        if(post.postId === id) {
            return {...post, isBookmarked: !post.isBookmarked};
        }
        return post;
    });
    setPosts(bookmarkedPosts);
}

const sortByMostUpvoted = (sortBy) => {
  const sortedPosts = [...posts].sort((a, b) => b.upvotes - a.upvotes);
  setSortedBy(sortBy);
  setPosts(sortedPosts);
}
const sortByLatest = (sortBy) => {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  setSortedBy(sortBy);
  setPosts(sortedPosts);
}
  return (
    <AppContext.Provider
      value={{
        posts,
        upvotePost,
        downvotePost,
        bookmarkPost,
        sortByMostUpvoted,
        sortByLatest,
        sortedBy
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const usePost = () => useContext(AppContext);