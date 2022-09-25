import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: '#fafafa'
          }}
        >
          <Link to={"/"}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
              alt="Amazon Logo"
              width="80px"
              height="80px"
            />
          </Link>

          <Link to={'/checkout'} style={{ textDecoration: 'none'}}>
            <IconButton>
              <span
                style={{
                  marginRight: ".3rem"
                }}
              >
                5
              </span>
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
