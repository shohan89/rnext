import Profile from "./components/Profile";


export default function App() {

  const person = 'Shohan';
  const size = 45;  
  const age = 28;

  return (
    <Profile 
      person={person}
      size={size}
      age={age}
    />
  );
}
