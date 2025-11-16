export default function Form({ status }) {
  if (status === "success") return <h1>That's right!</h1>;
  return (
    <>
      <form>
        <h2>City quiz</h2>
        <p>What city is located on two continents?</p>
        <textarea disabled={status === "submitting"}></textarea>
        <br />
        <button disabled={status === "submitting" || status === "empty"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {status === "error" && <p>There was an error</p>}
      </form>
      <hr />
    </>
  );
}
