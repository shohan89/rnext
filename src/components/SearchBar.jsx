
export default function SearchBar({ searchText, handleOnChange }) {
  return (
    <label>
      Search:{' '}
      <input
        value={searchText}
        onChange={handleOnChange}
      />
    </label>
  )
}
