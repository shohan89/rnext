export default function List({ items, searchText }) {
    if(!items || items.length === 0){
        return <p>No result found for <b>{searchText}</b>!</p>
    }
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
