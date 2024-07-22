import { getImageUrl } from "./Utils";
function Card({ children }) {
  return (
    <div
      style={{
        border: "5px solid red",
        borderRadius: "4px",
        padding: "4px",
        margin: "4px 0",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}
export default function Avatar({ person, size }) {
  return (
    <div
      style={{
        //nằm ngang
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // căn giữa
        justifyContent: "center",
        margin: "50px",
      }}
    >
      <Card>
        <img
          className="avatar"
          src={getImageUrl(person)}
          alt={person.name}
          width={size}
          height={size}
          style={{
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
      </Card>

      <p
        style={{
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {person.name}
      </p>
    </div>
  );
}
