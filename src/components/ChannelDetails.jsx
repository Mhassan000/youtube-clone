import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import{Videos , ChannelCard} from './'
import {fetchFromApi} from '../utils/fetchFromApi'

const ChannelDetails = () => {
  const[channelDetail, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  console.log(videos)
  useEffect(()=>{
    fetchFromApi (`channels?part=snippet&id=${id}}`)
      .then ((data)=> setChannelDetails(data?.items[0]))

    fetchFromApi (`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>setVideos(data?.items))

    
  },[id])
  return (
    <Box minHeight='92vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,103,0.9920561974789917) 0%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }} 
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-115px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm:'100px'}}}/>
        <Videos videos={videos} />

      </Box>
    </Box>
  )
}

export default ChannelDetails