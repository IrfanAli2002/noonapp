import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




// Appbar ================

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>

  );


  {/* first section end  */ }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#feee00", height: "85px", maxWidth: "100%", color: "black" }} position="static">
        <Toolbar>

          <Typography sx={{ marginright: "auto" }}>
            <div className='flex'>
              <img className='' src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" alt="noon" class="sc-afe2674f-1 iYVDXL" />
              <img className='flaglogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png" />
              <span className=' flexcloum black'>Deliver to
                <span className='bold '>
                  Dubai
                </span>
              </span>
              <img className='' src='https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg' />
            </div>
          </Typography>



          <Search>

            <StyledInputBase
              className='inp'
              placeholder="what are you looking for..."
              inputProps={{ '': 'search' }}
            />
          </Search>


          <Box sx={{ flexGrow: 1 }} />
          <span className='black bold '>Sign In</span>
          <PersonOutlineOutlinedIcon sx={{ padding: "10px 10px 7px 3px" }}
          />
          <span   >
            |
          </span>
          <span className='black bold textmargin '>Cart</span>
          <LocalGroceryStoreOutlinedIcon sx={{ padding: "10px 10px 7px 5px" }} />




        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <div>
        <div class="content flex">

          <div class="category1"><a  href="/uae-en/all-products/">All Categories <ArrowDropDownIcon /> </a>
          </div>
          <div>
            <ul className=''>
              <div className=''>
                <div className='flex'>
                  <div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>ELECTRONICS</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>MEN</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>WHOMEN</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>HOME</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>BEAUTY & FRAGRANCE</span>
                      </a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>BABY & TOYS</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>GROCERY</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>SPORTS</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>BESTSELLER</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead   '>SELL ON NOON</span>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <>
        <div class="poster">
          <img src="https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png" />
        </div>



      </>
      


        </Box>


  );
}
