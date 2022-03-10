import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Content from "./components/Content";
import Right from "./components/Right";
import Left from "./components/Left";
import { useState } from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import CancelIcon from "@mui/icons-material/Cancel";
import { red } from '@mui/material/colors';

function App() {
  const [filter, setFilter] = useState("");
  const [drawer, setDrawer] = useState(false);
  const [series, setSeries] = useState([
    {
      img: "/images/beneath.jpg",
      title: "Beneath the Dragoneye Moons",
      author: "Selkie",
      desc: "Elaine is ripped from this world to Pallos.",
    },
    {
      img: "/images/wandering.jpg",
      title: "The Wandering Inn",
      author: "Pirateaba",
      desc: "The Wandering is a serie about a girl called Erin written by pirateaba",
    },
    {
      img: "/images/wandering.jpg",
      title: "The Wandering Inn",
      author: "Pirateaba",
      desc: "The Wandering is a serie about a girl called Erin written by pirateaba",
    },
    {
      img: "/images/wandering.jpg",
      title: "The Wandering Inn",
      author: "Pirateaba",
      desc: "The Wandering is a serie about a girl called Erin written by pirateaba",
    },
    {
      img: "/images/wandering.jpg",
      title: "The Wandering Inn",
      author: "Pirateaba",
      desc: "The Wandering is a serie about a girl called Erin written by pirateaba",
    },
  ]);
  return (
    <div className="App">
      <Navbar filter={filter} setFilter={setFilter} setDrawer={setDrawer} />
      <Drawer
        anchor="left"
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
      >
        <List sx={{ width: "250px", bgcolor: "#f5f5f5", height: "100%" }}>
          <IconButton  onClick={()=> {setDrawer(false)}} sx={{ position: "absolute", right: "7px", top: "7px" }}>
            <CancelIcon sx = {{fontSize:25, color: red[400]}}  />
          </IconButton>
          <Typography variant="h5" sx={{ pl: 2, pb: 1, pt: 2 }}>
            Title
          </Typography>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Grid container>
        <Grid item xs={2}>
          <Left />
        </Grid>
        <Grid item xs={8}>
          <Content series={series} filter={filter} />
        </Grid>
        <Grid item xs={2}>
          <Right />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
