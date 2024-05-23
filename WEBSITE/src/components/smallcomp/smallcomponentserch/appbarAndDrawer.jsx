
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Badge, Button, Drawer } from "@mui/material";
import {
  AccountBox,
  DashboardCustomizeRounded,
  HomeMax,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import DisneyThemedCheckbox from "./../smallcompindashbord/disnuuithem";




var drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight({ open, handleDrawerOpen, handleDrawerClose , username}) {
 
   

  return (
   <>
   
   <AppBar position="fixed" open={open}>
        <Toolbar className="bg-primary">
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          {username} 
          </Typography>

        
          <Button
            color="inherit"
            component={Link}
            to="/"
            
            >
            <DashboardCustomizeRounded />
            <Badge sx={{ ...(open && { display: "none" }) }}>
              <span className="badge ml-2"> گەڕانەوە بۆ وێبسایت</span>
            </Badge>
          </Button>

          <DisneyThemedCheckbox />

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>


     


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        
        className='bg-base-200 text-base-content'
        >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            
              <ChevronRightIcon   className='bg-base-200 text-base-content'/>
           
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem >
            <ListItemButton component={Link} to={'/Searchcode/dashbord'}>
              <ListItemText  className='bg-base-200 text-base-content' primary="دەستپێک" />
              <ListItemIcon > <HomeMax   className='bg-base-200 text-base-content'/> </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton component={Link} to={'/Searchcode/search'}>
              <ListItemText primary="گەڕان"   className='bg-base-200 text-base-content'/>
              <ListItemIcon> <Search   className='bg-base-200 text-base-content' /> </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem >
            <ListItemButton component={Link} to={'/Searchcode/account'}>
              <ListItemText  className='bg-base-200 text-base-content' primary=" هەژمار" />
              <ListItemIcon > <AccountBox   className='bg-base-200 text-base-content'/> </ListItemIcon>
            </ListItemButton>
          </ListItem>
          </List>
      </Drawer>

     
   
   </>
  )
}

