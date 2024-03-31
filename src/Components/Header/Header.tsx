import React from 'react';
import logo from '../../Images/logoo.svg'
import '../../Styles/Header.scss'
const Header = () => {
    return (
        <header className='Header'>
                <div className="container">
                <img src={logo} alt=""/>

                <ul>
                    <a href="">Неисправности</a>
                    <a href="">Цены</a>
                    <a href="">Бренды</a>
                    <a href="sd">Отзывы</a>
                </ul>

                <button><a href="tel: +7 925 868-12-96">+7 925 868-12-96</a></button>
            </div>
        </header>
    );
};

export default Header;



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import logo from '../../Images/logoo.svg'

// const pages = ['НЕИСПРАВНОСТИ', 'ЦЕНЫ', 'БРЕНДЫ','ОТЗЫВЫ'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl" style={{background:'black'}}>
//         <Toolbar disableGutters >
          
          

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}  >
//             <IconButton 
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
              
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu 
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu} >
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <img width={100} src={logo} alt=""/>
            
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

             

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;


