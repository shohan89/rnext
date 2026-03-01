function Cup({ guestCount }) {
  return <div>Make tea for {guestCount}</div>;
}

function App() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guestCount={i} />);
  }
  return cups;
  // return (
  //   <div>
  //     {/* <h1>Spiced Chai Recipe</h1>
  //     <h2>For two</h2>
  //     <Recipe drinkers={2} />
  //     <h2>For a gathering</h2>
  //     <Recipe drinkers={4} /> */}
  //     {/* <Cup />
  //     <Cup />
  //     <Cup /> */}
  //   </div>
  // );
}

export default App;
