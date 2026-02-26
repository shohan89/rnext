import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Profile>
        <Avatar person={{ name: "shohan" }} size={100} />
        <Avatar person={{ name: "Sharoar" }} size={80} />
      </Profile>
    </div>
  );
}

export default App;
