import { useParams } from "react-router-dom";

function DogDetails({ dogInfo }) {
  const params = useParams();
  const myDog = dogInfo.filter((dog) => dog.name == params.name)[0];
  return (
    <>
      <h3> {myDog.name}! </h3>
      <img src={("/" + myDog.name + ".jpg").toLowerCase()} height="150px" />
      <p> Age: {myDog.age} </p>
      <p> Some Facts: </p>
      <ul>
        {myDog.facts.map((fact, i) => (
          <li key={myDog.name + i}>{fact}</li>
        ))}
      </ul>
    </>
  );
}

export default DogDetails;
