import ArticleHome from "../components/ArticleHome/ArticleHome";
import { useGetPostsQuery } from "../components/store/features/postsSlice";
const Home = () => {
  const { data, isLoading } = useGetPostsQuery();
  if (data) {
    console.log(data);
  }
  if (isLoading) return <div className='row bm-row'>Loading...</div>;

  return (
    <div className='row bm-row'>
      {data?.posts.map((post: any) => (
        <ArticleHome
          id={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Home;
