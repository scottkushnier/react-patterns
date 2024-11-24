import { Link } from "react-router-dom";

function Nav({ items }) {
  // console.log("items: ", items);
  return (
    <>
      <h3> Dog List! </h3>
      <nav>
        {items.map((item) => (
          <div key={item}>
            <button>
              <Link to={item}>{item}</Link>
            </button>
            <br />
          </div>
        ))}
      </nav>
    </>
  );
}

export default Nav;
