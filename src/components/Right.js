import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
} from "@mui/material";
import React, { useState } from "react";
import { grey } from "@mui/material/colors";

export default function Right({ series }) {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Container sx = {{borderLeft: "1px solid", borderColor: grey[300], minHeight:"100%"}}>
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => {
          setTabValue(newValue);
        }}
      >
        <Tab label="Trending" />
        <Tab label="Most Viewed" />
        <Tab label="Most Liked" />
      </Tabs>
      {tabValue === 0 ? (
        <List>
          {[...series]
            .sort((a, b) => {
              return a.trending - b.trending;
            })
            .slice(0, 5)
            .map((element) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={element.title}
                      secondary={element.author}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      ) : tabValue === 1 ? (
        <List>
          {[...series]
            .sort((a, b) => {
              return b.views - a.views;
            })
            .slice(0, 5)
            .map((element) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={element.title}
                      secondary={element.author}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      ) : (
        <List>
            {[...series]
            .sort((a, b) => {
              return b.likes - a.likes;
            })
            .slice(0, 5)
            .map((element) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={element.title}
                      secondary={element.author}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      )}
    </Container>
  );
}
