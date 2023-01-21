import React from 'react'
import {Stack } from '@mui/material'
import { categories } from '../utils/constant'
const Sidebar = ({selectedCategory,setSelectedCategory}) => {

    return (
        <Stack direction= 'row'className='scroll-horizontal' 
        sx={{
            overFlowX: 'auto',
            height: {sx: 'auto' ,md: '95vh'},
            flexDirection: {md: 'column'},
        }}>
        {categories.map((category) => (
            <button className='category-btn'
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            style={{
                backgroundColor: selectedCategory === category.name && '#FC1503',
                color: 'white',
                
                
            }}
            >

                <span style={{
                    color: category.name === selectedCategory ? 'white' : '#FC1503', marginRight: '15px'
                }}>{category.icon}</span>
                <span style={{
                    opacity: category.name === selectedCategory ? 1 : 0.8
                }}>{category.name}</span>
            </button>
        ))}

    </Stack>
  )
}

export default Sidebar