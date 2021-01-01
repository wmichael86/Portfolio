import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../images/AvatarMaker.svg';
import Typed from 'react-typed';

const Header = () => {
    return (
        <Box>
           <Avatar src={avatar} alt='Michael Lewis Image' />
           <Typography 
           variant="h4">
                <Typed strings={['Michael Lewis']} 
                typeSpeed={40} />
           </Typography>
           <br/>
           <Typography 
           variant="h5">
                <Typed strings={['Web Design', 'Web Development', 'MERN Stack']} 
                typeSpeed={40}
                backSpeed={60}
                loop />
           </Typography>
        </Box>
    )
}

export default Header
