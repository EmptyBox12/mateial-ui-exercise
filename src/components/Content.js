import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "./Card";

export default function Content({ series, filter }) {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          paddingTop: 2,
          width: "100%",
          mb:2
        }}
      >
        {series
        .filter(element => {
          return element.title.toLowerCase().includes(filter.toLowerCase())
        })
        .map((serie) => {
          return (
            <Grid item xs = {12} md = {6} lg = {4}>
              <Card serie={serie} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
