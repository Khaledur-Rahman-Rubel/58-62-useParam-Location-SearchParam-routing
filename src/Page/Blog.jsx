import { useLocation, useParams } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();

  /*   const [bodyData, setBodyData] = useState("");
  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title == title);
    setBodyData(blogData[0].body);
  }, []); */

  return (
    <div>
      <h1>{title} page</h1>
      <p>{location.state.body.slice(0, 100)}</p>
      <p>{location.state.body.slice(101, 5000)}</p>
    </div>
  );
};

export default Blog;
