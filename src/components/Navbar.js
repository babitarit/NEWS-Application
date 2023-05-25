import React,{useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import'../styles/NavbarStyle.css'


const Navbar = () => {
  const[mobileOpen, setmobileOpen] = useState(false)
//handle menu click
const handleDrawerToggle = () =>{
  setmobileOpen(!mobileOpen)
}

  //menu drawer
  const drawer = ( 
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
 <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{flexGrow:1, my:2}}>
    <ArticleIcon/>
    MY news
    </Typography>
    <Divider/>

<ul className='mobile-navigationmenu'>
  <li>
    <Link to={'/'}>Home</Link>
  </li>
  <li>
    <Link to={'/Articles'}>Article</Link>
  </li>
  <li>
    <Link to={'/about'}>About</Link>
  </li>
  <li>
    <Link to={'/ Adminpanel'}>Admin Panel</Link>
  </li>

</ul>

</Box>



  
  )
  return (
    <>
   <Box>
    <AppBar component={'nav'} sx={{bgcolor:'black'}}>
    <Toolbar>

    <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{mr:2, display:{sm:"none"},}} onClick={handleDrawerToggle}>
<MenuIcon/>
    </IconButton>
    <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{flexGrow:1}}>
    <ArticleIcon/>
    MY news
    </Typography>
<Box sx={{display:{xs:'none', sm:'block'}}}>
<ul className='navigationmenu'>
  <li>
    <Link to={'/'}>Home</Link>
  </li>
  <li>
    <Link to={'/Articles'}>Article</Link>
  </li>
  <li>
    <Link to={'/about'}>About</Link>
  </li>
  <li>
    <Link to={'/Adminpanel'}>Admin Panel</Link>
  </li>

</ul>


</Box>




    </Toolbar>
      
    </AppBar>
<Box component="nav">
<Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
sx={{display:{xs:'block' , sm:'none'}, "& .MuiDrawer-paper":{
  boxSizing:'border-box',
  width:'240px',
}}}
>
  {drawer}
</Drawer>
</Box>
<Box>

<Toolbar/>

</Box>

   </Box>
    </>
  )
}

export default Navbar