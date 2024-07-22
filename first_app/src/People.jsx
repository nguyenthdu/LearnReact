const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

const user = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];
export default function List() {
  //   const listItems = people.map((person) => <li>{person}</li>);
  const listItems = people.map((person) => <ShowItem person={person} />);
  const listUserChemists = user.filter(
    (person) => person.profession === "chemist"
  );
  const listUser = listUserChemists.map((user) => <ShowUser user={user} />);

  return (
    <div>
      <ul>{listUser}</ul>
      <p>----------------------------------</p>
      <ul>{listItems}</ul>
    </div>
  );
}

function ShowItem({ person }) {
  return (
    <li
      style={{
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
        textDecoration: "underline",
      }}
    >
      {person}
    </li>
  );
}
function ShowUser({ user }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
        textDecoration: "underline",
      }}
    >
      {/* id, name, persionnal */}
      <text>
        {user.id} - {user.name} - {user.profession}
      </text>
    </div>
  );
}
