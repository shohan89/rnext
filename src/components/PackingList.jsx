function Item({ name, isPacked }) {
//   if(isPacked){
//     return null;
//   }
//   return <li>{name}</li>
// instead of the above code, we can use a ternary operator to conditionally render the item
    return <li>{ isPacked ? <del>{name + '✅'}</del> : name }</li>;
}
export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={false} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
