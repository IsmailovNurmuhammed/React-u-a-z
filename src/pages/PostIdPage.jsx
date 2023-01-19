import React from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
    const response = await PostService.getCommentsByID(params.id);
    setComments(response.data);
    console.log(response.data);
  });

  React.useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [])
  return (
    <div className="post-page">
      <h1>post id pages ==== {params.id} </h1>
      {isLoading
        ? <Loader/>
        : <div> {post.id}.{post.title}</div>
      }
      <h2>comments</h2>
      {
        isCommentsLoading
          ? <Loader/>
          : <div>
            {comments.map((comment, index) => (
                <div key={index}>
                  <p><strong>{comment.email}</strong></p>
                  <div>{comment.body}</div>
                </div>
              )
            )}
          </div>
      }

    </div>
  );
};

export default PostIdPage;