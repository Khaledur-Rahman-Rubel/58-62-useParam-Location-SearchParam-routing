import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        distinctio alias hic optio harum delectus autem! Et facere repudiandae
        fuga vero nisi dignissimos, culpa odit autem harum voluptate quos earum
        non nesciunt ipsum minus laboriosam molestias sapiente ad ratione,
        tempora corporis soluta expedita vel. Deserunt officia ipsam optio ullam
        facere?
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go home
      </button>
    </div>
  );
};

export default Contact;
