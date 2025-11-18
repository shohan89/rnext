export default function InputField({ title, inputValue, handleOnChange }) {
  return (
    <label>
      {title}: <input type="text" value={inputValue} onChange={handleOnChange} /> <br /> <br />
    </label>
  );
}
