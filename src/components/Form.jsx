import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === 'dhaka') {
        resolve();
      } else {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }
    }, 3000);
  });
}


export default function Form() {
    // visual states "empty", "typing", "submitting", "error", "success"
    // mandatory state
    const [ answer, setAnswer ] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");

    // handlers
    function handleTextAreaChange(event){
        setAnswer(event.target.value);
        setError(null);
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            await submitForm(answer);
            setStatus('submitting');
        } catch (err) {
            setStatus('typing');
            setError(err)
        }
    }
  if ( status === 'success' ) return <h1>That's right!</h1>;
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h2>City quiz</h2>
        <p>What city is located on two continents?</p>
        <textarea value={answer} onChange={handleTextAreaChange}></textarea>
        <br />
        <button disabled={ status === 'submitting' || answer === '' }>
          Submit
        </button>
        { status === "submitting" && <p>Loading...</p> }
        { error && <p style={{ color: "red" }}>{error.message}</p> }
      </form>
    </>
  );
}
