import { AppBar, Box, InputBase, Toolbar,Badge , Typography,MenuItem ,Menu ,Button, styled,Avatar } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
   const [open,setOpen]= useState(false)

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
  }))
  const Icons = styled(Box)(({ theme }) => ({
   display:"none",
   gap:"20px",
   alignItems:'center',
   [theme.breakpoints.up("sm")]:{
    display:"flex"
   }
  }))
  const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"20px",
    alignItems:'center',
    [theme.breakpoints.up("sm")]:{
      display:"none"
     }
   }))
  return (
    <>

      <AppBar position='sticky'>
        <StyledToolBar>
          <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Misk</Typography>
          <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search><InputBase placeholder='search...' /></Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon  />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon  />
            </Badge>
            <Avatar sx={{
              width:30,
              height:30
            }}
            onClick={e=>setOpen(true)}
            />
          </Icons>
          <UserBox>
          <Avatar sx={{
              width:30,
              height:30
            }}
            onClick={e=>setOpen(true)}
            
            />
            <Typography variant="h6">Misk</Typography>
          </UserBox>
        </StyledToolBar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
    </>
  )
}

export default Navbar