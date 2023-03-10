import React from 'react'
import { useState, useEffect } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi' 
import {Sidebar, Videos} from './'
import { Stack, Box, Typography } from '@mui/material'
// import { useParams } from 'react-router-dom'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  console.log(videos)
  useEffect (()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>{
        setVideos(data.items)
      })
    }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column',
    md: 'row'}}}>
      <Box sx={{height: {sx: 'auto' ,md: '92vh'}, borderRight: '1px solid #3d3d3d' , px: {sx: 0 , md: 2}}}>
        <Sidebar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/> 

       
      </Box>
      <Box p={2} sx={{overflowY: 'auto' , height: '92vh' , flex:2 }}>
        <Typography variant='h4'fontWeight= "bold" mb={2}  color='white'>
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>
        {<Videos videos={videos} />}
      </Box>
    </Stack>
    )
}
  

export default Feed

