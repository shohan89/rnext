function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent += "✅";
  }
  return <li>{itemContent}</li>;
}

export default function PackingList() {
  return (
    <div>
      <h2>Shohan's Packing List</h2>
      <ul>
        <Item name="Jama" isPacked={true} />
        <Item name="pant" isPacked={true} />
        <Item name="juta" isPacked={false} />
      </ul>
    </div>
  );
}
