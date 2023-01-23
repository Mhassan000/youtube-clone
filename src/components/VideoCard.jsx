import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { demoChannelTitle ,demoVideoUrl,demoChannelUrl,demoVideoTitle } from '../utils/constant'
import { CheckCircle } from '@mui/icons-material'
const VideoCard = ({video: {id:{videoId}, snippet}}) => {
    console.log(videoId,snippet)
  return (
    <Card sx={{ width:{xs:'100%',sm:'358px', md:'290px' }, borderRadius:'10px', boxShadow:'none'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
            component='img'
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            
            sx={{width: { xs:'100%', sm:'358px', md:'290px'},height:'180px' }}
            />        
        </Link >
        <CardContent sx={{ backgroundColor: '#1e1e1e' , height: '100px'  }}>
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='#FFFF'>
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channeld}`: demoChannelUrl}>
                <Typography variant='subtitle3' fontWeight='bold' color='gray'>
                    {snippet?.channelTitle || demoChannelTitle }
                </Typography>
                <CheckCircle  sx={{color: 'gray' ,marginLeft:'5px' ,fontSize:'12px'}}/>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard