// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {Paper,IconButton } from "@mui/material";


const SearchBar = () => {
  // const [search, setSearch] = useState('');
  return (
    <Paper 
    component='form'
    onSubmit={()=>{}}
    sx={{ 
      borderRadius: 20,
      border: '1px solid #000',
      paddingLeft:[1],
      mr:{sm: 5},
      boxShadow:'none',
      }}>
        <input className="search-bar"
        placeholder="Search..."
        value=''
        onChange={()=>{}} />
        <IconButton type='submit' sx={{ p:'7px', color:'red'}}>
          <SearchIcon />
        </IconButton>
    </Paper>
    )
}

export default SearchBar