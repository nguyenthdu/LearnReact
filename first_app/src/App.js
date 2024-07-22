// import Gallery from "./Gallery.js";
// import { Profile } from "./Gallery.js";
import TodoList from "./Todo.jsx";
import Avatar from "./Avatar.jsx";
import InputDate from "./InputDate.jsx";
import PackingList from "./PackingList.jsx";
import List from "./People.jsx";
import ListUserData from "./PeopleData.jsx";
export default function App() {
  return (
    <div>
      <ListUserData />
      <List />
      <PackingList />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <TodoList /> */}
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <Avatar
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <Avatar
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
        {/* <InputDate /> */}
      </div>
    </div>
  );
}
