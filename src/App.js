import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Box} from "@mui/material";
import { Navbar, Feed, ChannelDetails,SearchDetails,VideoDetail } from "./components";
const App = ()=> {

  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children:[
        {
          path: "/",
          element: <Feed />,
        }
      ]
    },
    {
      path: "/video/:id",
      element: <VideoDetail />,
    },
    {
      path: "/channel/:id",
      element: <ChannelDetails />,
    },
    {
      path: "/search/:searchTerm",
      element: <SearchDetails />,
    }
  ]);
  return (
    <Box sx={{ bgcolor: "red" }}>
      <RouterProvider router={router}/>
      
    </Box>
  );
}

export default App;
