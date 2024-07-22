import { people } from "./data.js";
import { getImageUrl } from "./Utils.js";

export default function ListUserData() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <ShowUser key={person.id} person={person} />
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
function ShowUser({ person }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: 20,
      }}
    >
      <img src={getImageUrl(person)} alt={person.name} />
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
        }}
      >
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </div>
  );
}
