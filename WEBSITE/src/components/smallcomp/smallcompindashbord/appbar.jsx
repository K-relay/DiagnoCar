import * as React from "react";
import { Link } from "react-router-dom";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
// import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "@mui/material";

import {  getLang, getTranslatedText } from "../../../assets/js/langecode";
import {
  AccountBox,
  PostAddSharp,
  Home,
  AppRegistration,
  CarCrashOutlined,
  LoginRounded,
  Logout,
  CarRepairSharp,
  CarRepair,
} from "@mui/icons-material";
import "../../../assets/css/home.css";
import "../../../assets/css/tail.css";
import SwipeableTemporaryDrawer from "./notfication";
import DisneyThemedCheckbox from "./disnuuithem";
import "../../../assets/js/userauth";
import { handleLogout } from "../../../assets/js/userauth";

var langCode = getLang();
// const languageOptions = getLangeoptions();



// const handleLanguageChange = (event) => {
//   changeTo(event.target.value);
//   langCode = event.target.value;
//   window.location.reload();
// };

function handleLogoutfunc() {
  handleLogout();
}




export default function PrimarySearchAppBar(props) {
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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {props.parameterName ? (
          <>
            <MenuItem>
              <IconButton size="small" aria-label="Login" color="inherit">
                <Badge color="error">
                  <CarCrashOutlined />
                </Badge>
              </IconButton>
              <p>
                <Button color="inherit" component={Link} to="/Searchcode">
                  {getTranslatedText(langCode, "searchcode")}
                </Button>
              </p>
            </MenuItem>
            <MenuItem>
              <IconButton size="small" aria-label="Log out" color="inherit">
                <Badge color="error">
                  <Logout color="error" />
                </Badge>
              </IconButton>
              <p>
                <Button
                  color="error"
                  component={Link}
                  onClick={handleLogoutfunc}
                >
                  {getTranslatedText(langCode, "logout")}
                </Button>
              </p>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <IconButton size="small" aria-label="Signup" color="inherit">
                <Badge color="error">
                  <AppRegistration />
                </Badge>
              </IconButton>
              <p>
                <Button color="inherit" component={Link} to="/Signup">
                  {getTranslatedText(langCode, "Signup")}
                </Button>
              </p>
            </MenuItem>
            <MenuItem>
              <IconButton size="small" aria-label="Login" color="inherit">
                <Badge color="error">
                  <LoginRounded />
                </Badge>
              </IconButton>
              <p>
                <Button color="inherit" component={Link} to="/Login">
                  {getTranslatedText(langCode, "Login")}
                </Button>
              </p>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ justifyContent: "flex-end" }}
    >
      <MenuItem>
        <IconButton size="small" aria-label="home" color="inherit">
          <Badge color="error">
            <Home />
          </Badge>
        </IconButton>
        <p>
          <Button color="inherit" component={Link} to="/#home">
            {getTranslatedText(langCode, "home")}
          </Button>
        </p>
      </MenuItem>

      <MenuItem>
        <IconButton size="small" aria-label="Services" color="inherit">
          <Badge color="error">
            <CarRepair />
          </Badge>
        </IconButton>
        <p>
          <Button color="inherit" component={Link} to="/Services">
            {getTranslatedText(langCode, "Services")}
          </Button>
        </p>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" aria-label="Posts" color="inherit">
          <Badge color="error">
            <PostAddSharp />
          </Badge>
        </IconButton>
        <p>
          <Button color="inherit" component={Link} to="/Posts">
            {getTranslatedText(langCode, "posts")}
          </Button>
        </p>
      </MenuItem>

      <MenuItem>
        <IconButton size="small" aria-label="" color="inherit">
          <Badge color="error">
            <AccountBox />
          </Badge>
        </IconButton>
        <p>
          {" "}
          <Button color="inherit" component={Link} to="/About">
            {getTranslatedText(langCode, "about")}
          </Button>
        </p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        
        <Toolbar sx={{ justifyContent: "flex-end" }}>
     <Box  sx={{
              display: "flex",
              gap: 3,
              width: "20rem",
              height: "40px",
     }}>
     <Typography
            variant="h6"
            noWrap
            component="div"
           
          >
            {getTranslatedText(langCode, "NameOfAplication")}
          </Typography>
     </Box>
       

          <Box
            sx={{
              display: "flex",
              gap: 3,
              width: "40rem",
              height: "40px",
              "@media (max-width: 768px)": {
                // Adjust the breakpoint as needed
                display: "none", // Hide the buttons on mobile devices
              },
            }}
          >
            <Button
              component={Link}
              to="/Home"
              color="inherit"
              startIcon={<Home fontSize="small" />}
            >
              {getTranslatedText(langCode, "home")}
            </Button>

            <Button
              component={Link}
              to="/Services"
              color="inherit"
              startIcon={<CarRepairSharp fontSize="small" />}
            >
              {getTranslatedText(langCode, "Services")}
            </Button>

            <Button
              component={Link}
              to="/Posts"
              color="inherit"
              startIcon={<PostAddSharp fontSize="small" />}
            >
              {getTranslatedText(langCode, "posts")}
            </Button>

            <Button
              component={Link}
              to="/About"
              color="inherit"
              startIcon={<AccountBox fontSize="small" />}
            >
              {getTranslatedText(langCode, "about")}
            </Button>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <DisneyThemedCheckbox />

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {props.parameterName ? (
              <>
                <SwipeableTemporaryDrawer />
              </>
            ) : null}

            <Button
              onClick={handleProfileMenuOpen}
              sx={{ backgroundColor: "#1976D2", color: "white" }}
              startIcon={<AccountCircle sx={{ fontSize: "3.5rem" }} />}
            >
              {props.parameterName
                ? props.parameterName
                : getTranslatedText(langCode, "Login")}
            </Button>

            {/* <Select
              value={getLang()} // Set the currently selected language
              onChange={handleLanguageChange} // Handle language change
              label="Select Language"
              renderValue={() => <LanguageIcon />}
              components={IconButton}
              size="small"
              sx={{
                color: "white", // Change the text color to white
                "& .MuiSelect-icon": {
                  color: "white", // Change the color of the dropdown icon to white
                },
                "& .MuiOutlinedInput-root": {
                  border: "none", // Hide the border
                },
                "& .MuiInputBase-root": {
                  color: "white", // Change the color of the selected value to white
                },
                "& .MuiList-root": {
                  color: "white", // Change the color of options' text to white
                  backgroundColor: "#333", // Change the background color of the options
                },
              }}
            >
              {languageOptions.map((option) => (
                <MenuItem key={option.code} value={option.code}>
                  {" "}
                  <span className="badge  mr-4"> {option.code} </span>{" "}
                  {option.label}{" "}
                </MenuItem>
              ))}
            </Select> */}
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
