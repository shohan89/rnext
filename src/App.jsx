function Button({ onBtnClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onBtnClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <h2>This is Toolbar</h2>
      <Button onBtnClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onBtnClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
