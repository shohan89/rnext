export default function Avatar({ person, size }) {
  return (
    <>
      <h2>{person.name}</h2>
      <p>{size}</p>
    </>
  );
}
