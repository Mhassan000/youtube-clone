import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {Paper,IconButton } from "@mui/material";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper 
    component='form'
    onSubmit={handleSubmit}
    sx={{ 
      borderRadius: 20,
      border: '1px solid #000',
      paddingLeft:[1],
      mr:{xs: 1,sm: 5},
      boxShadow:'none',
      }}>
        <input className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} />
        <IconButton type='submit' sx={{ p:'7px', color:'red'}}>
          <SearchIcon />
        </IconButton>
    </Paper>
    )
}

export default SearchBar;