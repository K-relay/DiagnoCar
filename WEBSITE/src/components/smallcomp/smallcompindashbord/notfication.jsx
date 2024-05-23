import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import { Notifications } from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://51.20.138.46/notification/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 




  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    className="bg-base-200 text-base-content h-100 "
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {data && data.map(notfi => (
  
        <ListItem>
          <div role="alert" className="alert shadow-lg ">
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <div className="text-xs">{notfi.text}</div>
            </div>
            <Link className="btn btn-sm text-sky-400" to={`../${notfi.link}`} >بینەربە </Link>
          </div>
        </ListItem>
      ))}
      </List>
      <Divider />
     
    </Box>
  );

  return (
    <div style={{width:'45px'}}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box sx={{display:'flex',flexDirection:'row'}}>

          <Button onClick={toggleDrawer(anchor, true)}>

            <Notifications sx={{ color: 'white'}} />
           

          </Button>
         
          </Box>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
