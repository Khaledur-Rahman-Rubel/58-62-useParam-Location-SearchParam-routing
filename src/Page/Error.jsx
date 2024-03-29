import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Error page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go home
      </button>
    </div>
  );
};

export default Error;
