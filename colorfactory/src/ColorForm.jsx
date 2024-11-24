import { useNavigate } from "react-router-dom";

function ColorForm({ addcolorfn }) {
  const navigate = useNavigate();
  const SubmitColor = (e, AddColorFn) => {
    e.preventDefault();
    const newName = document.getElementById("colorname").value;
    const newSpec = document.getElementById("colorspec").value;
    AddColorFn(newName, newSpec);
    navigate("/colors");
  };
  return (
    <form onSubmit={(e) => SubmitColor(e, addcolorfn)}>
      <label htmlFor="colorname">Name: </label>
      <input id="colorname" type="text" name="colorname" />
      <br />
      <div style={{ height: "10px" }}> </div>
      <label htmlFor="colorspec">Choose Color: </label>
      <input id="colorspec" type="color" />
      <br />
      <div style={{ height: "15px" }}> </div>
      <button>Submit</button>
    </form>
  );
}

export default ColorForm;
