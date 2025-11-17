import { useState } from "react";

export default function InputForm() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "Input 1",
    },
  ]);
  function handleAddInput(){
    const nextId = inputs[inputs.length - 1].id + 1;
    console.log("🚀 ~ handleAddInput ~ nextId:", nextId)
    const newInput = {
        id: nextId,
        label: 'Input 2'
    };
    setInputs([...inputs, newInput]);
  }
  return (
    <div>
      <div>
        {inputs.map((input) => (
          <input key={input.id} label={input.label} type="text" />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}
