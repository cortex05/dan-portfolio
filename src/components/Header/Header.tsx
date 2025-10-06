import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          This is the header
        </Toolbar>
        <ThemeToggle />
      </AppBar>
    </Box>
  )
}

export default Header