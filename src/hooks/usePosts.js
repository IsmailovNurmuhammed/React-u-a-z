import React from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = React.useMemo(() => {
    // console.log("getSortedPosts WORKED");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = React.useMemo(() => {
    // console.log("getSortedPostsSEARCHED WORKED");
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
}