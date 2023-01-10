import React from 'react'
import {Stack } from '@mui/material'
import { categories } from '../utils/constant'
const Sidebar = () => {

    const selected = 'New';
    return (
        <Stack direction= 'row' 
        sx={{
            overFlowY: 'auto',
            height: {sx: 'auto' ,md: '95%'},
            flexDirection: {md: 'column'},
        }}>
        {categories.map((category) => (
            <button className='category-btn'
            style={{
                backgroundColor: selected === category.name && '#FC1503',
                color: 'white',
                
            }}
            key={category.name}
            >

                <span style={{
                    color: category.name === selected ? 'white' : '#FC1503', marginRight: '15px'
                }}>{category.icon}</span>
                <span style={{
                    opacity: category.name === selected ? 1 : 0.8
                }}>{category.name}</span>
            </button>
        ))}

    </Stack>
  )
}

export default Sidebar