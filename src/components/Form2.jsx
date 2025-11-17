import { useState } from "react";

export default function Form2() {
    const [feedback, setFeedback] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleFormSubmit(e){
        e.preventDefault();
        setIsSending(true);
        await sendMessage(feedback);
        setIsSending(false);
        setIsSent(true);
    }
    // Show sent message confirmation
    if(isSent){
        return <h1>Thanks for feedback!</h1>;
    }
    
  return (
     <form onSubmit={handleFormSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
      value={feedback}
      disabled={isSending}
      onChange={(e) =>{
        setFeedback(e.target.value);
      }}
      />
      <br />
      <button
      disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
      
    </form>
  )
}

// Pretend to send a message.
function sendMessage(feedbackText) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}