function Search({search, setSearch }) {
  return (
    <div>
         <form className="d-flex" role="search">
        <input className="form-control me-2" onChange={e=>setSearch(e.target.value)} value = {search} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search