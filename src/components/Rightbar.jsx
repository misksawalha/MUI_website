import { Box, ImageList, ImageListItem, Typography, Divider, ListItemText, ListItem, List, ListItemAvatar } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { deepOrange, deepPurple, green, blue } from '@mui/material/colors';
import image from './assets/back.jpg'
const Rightbar = () => {
  return (
    <>
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant='h6' fontWeight={100} >Online Friend</Typography>
          <AvatarGroup max={4} sx={{ justifyContent: "center" }}>
            <Avatar sx={{ bgcolor: blue[500] }}>MS</Avatar>
            <Avatar sx={{ bgcolor: green[500] }}>AG</Avatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>MF</Avatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>MQ</Avatar>
            <Avatar sx={{ bgcolor: blue[500] }}></Avatar>
          </AvatarGroup>
          <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
          <ImageList cols={3} rowHeight={100}  >
            <ImageListItem>
              <img src={image} />
            </ImageListItem>
            <ImageListItem>
              <img src={image} />
            </ImageListItem>
            <ImageListItem>
              <img src={image} />
            </ImageListItem>
          </ImageList>
          <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversation</Typography>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}

export default Rightbar