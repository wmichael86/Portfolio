import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../images/MichaelAvatar.svg';
import Typed from 'react-typed';

//CSS styles
const mystyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: 'tomato',
    },
    subtitle: {
        color: 'tan',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}))


const Header = () => {
    const classes = mystyles()
    return (
        <Box className= {classes.typedContainer}>
        <Grid container justify='center'>
        <Avatar 
            className={classes.avatar}
            src={avatar} alt='Michael Lewis Image' 
            />
        </Grid>
           <Typography 
           className={classes.title}
           variant="h4">
                <Typed strings={['Michael Lewis']} 
                typeSpeed={40} />
           </Typography>
           <br/>
           <Typography
           className={classes.subtitle} 
           variant="h5">
                <Typed strings={['Full Stack Engineer', 'Front End Developer', 'MERN Stack', 'And More...' ]} 
                typeSpeed={40}
                backSpeed={35}
                loop />
           </Typography>
        </Box>
    )
}

export default Header

// Pickup in video at timestamp:48:34 tomorrow 
