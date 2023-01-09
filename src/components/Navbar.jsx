import * as React from 'react';
import { Box, Stack } from "@mui/material";
import { Link, Outlet} from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <Box>
      <Stack 
      direction='row' 
      alignItems='center'
      p={2}
      sx={{ position: "sticky" ,background: 'black' , justifyContent: "space-between" , top: 0}}
      >

      <Link to='/' style={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />


     </Stack>
      <Outlet />
        </Box>
    )
  }

export default Navbar;