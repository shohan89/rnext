import { useState } from "react";
import { filterItems, foods } from "../data/data";
import List from "./List";
import SearchBar from "./SearchBar";

export default function FilterableList() {
    const [searchText, setSearchText] = useState('');

    const result = filterItems(foods, searchText)

    // On change handler for searchBar
    function handleOnChange(e){
        setSearchText(e.target.value)
    }
  return (
    <>
        <SearchBar searchText={searchText} handleOnChange={handleOnChange} />
        <hr />
        <List items={result} searchText={searchText} />
    </>
  )
}
