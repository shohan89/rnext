function Item({ name, isPacked }) {

    let itemContent;

    if(isPacked){
        itemContent = name + '✅';
    }
    else{
        itemContent = name;
    }

    return <li>{ itemContent }</li>;
}
export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={false} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
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
