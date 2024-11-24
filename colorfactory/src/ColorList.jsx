import { Link } from "react-router-dom";

function ColorList({ colorList }) {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {colorList.map((colorDef) => (
          <li key={colorDef.name}>
            <Link to={`/colors/${colorDef.name}`}> {colorDef.name}</Link>
          </li>
        ))}
      </ul>
      <button>
        <Link to={"/colors/new"}>Add a Color</Link>
      </button>
    </>
  );
}

export default ColorList;
