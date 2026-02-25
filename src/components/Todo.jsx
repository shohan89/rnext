const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
// person object
const person = {
  name: "Gregorio Y. Zara",
  profile: "https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <>
      <h1>
        {person.name}'s To Do List for {formatDate(today)}!
      </h1>
      <h3>Current Time: {today.toLocaleString()}</h3>
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img className="avatar" src={person.profile} alt="Gregorio Y. Zara" />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}
