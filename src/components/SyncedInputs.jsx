import { useState } from "react";
import InputField from "./InputField";

export default function SyncedInputs() {
    const [inputValue, setInputValue] = useState('');
    function handleOnChange(e){
        setInputValue(e.target.value);
    }
  return (
    <>
        <InputField title={'First Input'} inputValue={inputValue} handleOnChange={handleOnChange}/>
        <InputField title={'Second Input'} inputValue={inputValue} handleOnChange={handleOnChange}/>
    </>
  )
}
