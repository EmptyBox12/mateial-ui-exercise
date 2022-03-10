import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

export default function Navbar({filter, setFilter, setDrawer}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#3e3e3e",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              color="inherit"
              edge="start"
              sx={{ mr: 2 }}
              onClick = {()=> {setDrawer(true)}}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Web Novels</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              onClick={() => {
                setOpen(true);
              }}
              onBlur={() => {
                setOpen(false);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: grey[300],
                borderRadius: 1,
                px: 1,
                width: open ? 280 : 200,
                transition: "width 150ms",
              }}
            >
              <SearchIcon sx={{ color: grey[900] }} />
              <InputBase placeholder="Search..." sx={{ pl: 1 }} value ={filter} onChange = { (e) => {
                setFilter(e.target.value)
              }} />
            </Box>
            <Button color="inherit" sx={{ fontSize: 18, fontWeight: 500 }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
