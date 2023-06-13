import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import Post from './Post';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Feed = () => {
  return (
   <>
   <Box flex={4} p={6}>
   <Post/>
   <Post/>
   <Post/>
   <Post/>
   </Box>
    
   </>
  )
}

export default Feed