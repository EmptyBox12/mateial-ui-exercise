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
import { useState } from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";

function App() {
  const [filter, setFilter] = useState("");
  const [drawer, setDrawer] = useState(false);
  const [series, setSeries] = useState([
    {
      img: "/images/beneath.jpg",
      title: "Beneath the Dragoneye Moons",
      author: "Selkie",
      desc: "Elaine is ripped from this world to Pallos.",
      trending: 2,
      views: 200,
      likes: 0
    },
    {
      img: "/images/wandering.jpg",
      title: "The Wandering Inn",
      author: "Pirateaba",
      desc: "The Wandering is a serie about a girl called Erin written by pirateaba",
      trending: 1,
      views: 40,
      likes: 0
    },
    {
      img: "/images/mother.jpg",
      title: "Mother of Learning",
      author: "nobody103",
      desc: "Repetition is the mother of learning, but Zorian will have to first make sure he survives to try again - in a world of magic",
      trending: 3,
      views: 90,
      likes: 0
    },
    {
      img: "/images/chicken.jpg",
      title: "Beware Of Chicken",
      author: "Casualfarmer",
      desc: "Jin Rou wanted to be a cultivator who defied the heavens, and surpassed all limits.",
      trending: 4,
      views: 170,
      likes: 0
    },
    {
      img: "/images/goblin.jpg",
      title: "The Iron Teeth: A Goblin's Tale",
      author: "ClearMadness",
      desc: "A new, darker age is dawning. The greed of kings has ignited a seemingly endless war.",
      trending: 5,
      views: 56,
      likes: 0
    },
    {
      img: "/images/blue.jpg",
      title: "Blue Core",
      author: "InadvisablyCompelled",
      desc: "Dungeon: A place full of monsters, traps, treasure, and death.",
      trending: 6,
      views: 110,
      likes: 0
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
          <IconButton
            onClick={() => {
              setDrawer(false);
            }}
            sx={{ position: "absolute", right: "7px", top: "7px" }}
          >
            <CancelIcon sx={{ fontSize: 25, color: red[400] }} />
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
        <Grid item xs={9}>
          <Content series={series} filter={filter} setSeries = {setSeries} />
        </Grid>
        <Grid item xs={3}>
          <Right series = {series} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
