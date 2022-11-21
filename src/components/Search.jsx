const Search = ({ onSubmit, value, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="search"
                value={value}
                placeholder="Search Games"
                onChange={onChange}
            ></input>
            <button type="submit">Search</button>
        </form>
    )
}
export default Search