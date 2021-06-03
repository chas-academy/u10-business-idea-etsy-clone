import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Mobilemenu({ categories, handleLogout }) {
  const [open, setOpen] = useState(false);
  const authContext = useAuthContext();

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };
  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {categories.map(category => (
              <Link to={'/c/' + category.slug} key={category.slug}>
                <ListItem button>
                  <ListItemText primary={category.title} />
                </ListItem>
              </Link>
            ))}
          </List>
          {authContext.isLoggedIn && (
            <>
              <Divider />
              <Link to={'/orders'}>
                <IconButton color="primary">
                  <ShoppingCartIcon /> Cart
                </IconButton>
              </Link>
              <br />
              <IconButton onClick={handleLogout} color="primary" variant="contained">
                <ExitToAppIcon />
                Log Out
              </IconButton>
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
}
