const Search = ({ onSubmit, value, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="search"
                value={value}
                placeholder="Search"
                onChange={onChange}
            ></input>
            <button type="submit">Search</button>
        </form>
    )
}
export default Search
