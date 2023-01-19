import React from "react";
import PostList from "../components/PostList";
import "../assets/styles/App.scss";
import PostForm from "../components/PostForm";
import SeparatorLine from "../components/UI/line/SeparatorLine";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({sort: "", query: ""});
  const [modal, setModal] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);
  const [postsLimit, setPostsLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = React.useRef();
  console.log(lastElement);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(postsLimit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, postsLimit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })

  React.useEffect(() => {
    fetchPosts();
  }, [page, filter, postsLimit]);

  const cretePost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const changePage = (page) => {
    setPage(page);
  }
  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="Posts">
      <MyButton
        style={{marginTop: 20}}
        onClick={() => setModal(true)}
      >Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={cretePost}/>
      </MyModal>
      <SeparatorLine/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <MySelect
        value={postsLimit}
        onChange={(value) => setPostsLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          {value: 5, name: "5"},
          {value: 10, name: "10"},
          {value: 25, name: "25"},
          {value: -1, name: "Показать все"},
        ]}
      />
      {postError && <h1> Произошла ошибка ${postError}</h1>}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про JS"}/>
      <div ref={lastElement} style={{height: 20, background: "red"}}></div>
      {isPostsLoading && <Loader/>}
      <Pagination
        totalPages={totalPages}
        changePage={changePage}
        currentPage={page}/>
    </div>
  );
}

export default Posts;
