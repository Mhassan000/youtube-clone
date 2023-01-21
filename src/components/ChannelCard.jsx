import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constant'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width:{xs:'356px',md:'300px'},
      height:'326px',
      margin:'auto',
      marginTop: marginTop,
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color:'#FFFF',
        }}>
          <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height:'180px',
            width:'180px',
            // mb: 2,
            // mt: '-2',
            border:'1px solid #e3e3e3'
          }}
          />
          <Typography variant="h6" sx={{mt: 2}}> {channelDetail?.snippet?.title}
            <CheckCircle  sx={{color: 'gray' ,marginLeft:'5px' ,fontSize:'14px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}

        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard