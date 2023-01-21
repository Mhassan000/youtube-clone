import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Box} from "@mui/material";
import { Navbar, Feed, ChannelDetails,VideoDetail, SearchFeed } from "./components";
const App = ()=> {

  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children:[
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/channel/:id",
          element: <ChannelDetails />,
        },
        {
          path: "/video/:id",
          element: <VideoDetail />,
        },
        {
          path: "/search/:searchTerm",
          element: <SearchFeed />,
        }
      ]
    },
  ]);
  return (
    <Box sx={{ 
      backgroundColor: 'black',
       }}>
      <RouterProvider router={router}/>
      
    </Box>
  );
}

export default App;
