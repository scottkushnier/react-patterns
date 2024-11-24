import { useParams, Navigate, Link } from "react-router-dom";

function ColorDetail({ colorList }) {
  const params = useParams();
  const colorInfos = colorList.filter(
    (color) => color.name == params.colorname
  );
  // console.log("colorInfos: ", colorInfos);
  if (colorInfos.length == 0) {
    return <Navigate to="/colors" replace={true} />;
  }
  const colorInfo = colorInfos[0];
  return (
    <>
      <div style={{ width: "100px", marginBottom: "5px", textAlign: "center" }}>
        <b>{colorInfo.name.toUpperCase()}</b>
      </div>
      <div
        style={{
          height: "100px",
          width: "100px",
          border: "2px, solid, black",
          backgroundColor: colorInfo.colorSpec,
        }}
      ></div>
      <div style={{ height: "10px" }}> </div>
      <button>
        <Link to={"/colors"}>Back</Link>
      </button>
    </>
  );
}

export default ColorDetail;
