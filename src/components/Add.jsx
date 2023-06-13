import { Box, Fab, IconButton, Modal, Tooltip, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: 'center',
    gap: "10px",
    marginBottom: "20px"
}))
function Add() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Add Post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant='h6' color="gray" textAlign="center">Create New Post</Typography>
                    <UserBox>
                        <Avatar sx={{
                            width: 30,
                            height: 30
                        }}
                            onClick={e => setOpen(true)}

                        />
                        <Typography variant='span' fontWeight={500}>Misk Sawallha</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-textarea"
                        placeholder="What's on your mind"
                        multiline
                        rows={3}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            
                            <CalendarMonthIcon/>
                            </Button>
                        
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add