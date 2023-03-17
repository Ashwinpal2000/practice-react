import React, { useState } from 'react'
import "../../App.css"
import { Users } from "./user";
import Table from './Table';

const Search = () => {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"]

  const search = (data) => {
    return data.filter((item) =>
      keys.some(key => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  }
  return (
    <div className='App'>
      <input type="text" className='search' onChange={e => setQuery(e.target.value)} />
      <Table data={search(Users)} />
    </div>
  )
}

export default Search;