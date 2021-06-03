import React, { useEffect, useState, useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

export default function Mobilecategories ({categories}) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };
    return (
      <div>
        <Button onClick={toggleDrawer(true)}>Categories</Button>
        <Drawer anchor='left' open={open} onClose={toggleDrawer(false)}>
          <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              {categories.map((category) => (
                <Link to={'/c/' + category.slug} key={category.slug}>
                  <ListItem button >
                    <ListItemText primary={category.title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    )
}