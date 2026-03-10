import "./App.css";

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function App() {
  return (
    <div>
      <AlertButton message={"This is a click handler"}>Click Me</AlertButton>
    </div>
  );
}

export default App;
