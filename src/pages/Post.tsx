import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "../components/store/features/postsSlice";
const Post = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetPostsQuery();
  const article = data.posts.filter((el) => el.id == postId)[0];
  console.log(article);
  return (
    <div>
      Post,{postId}
      <p>{article.title}</p>
      <p>{article.body}</p>
    </div>
  );
};

export default Post;
