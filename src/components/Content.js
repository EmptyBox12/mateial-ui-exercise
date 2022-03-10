import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "./Card";

export default function Content({ series, filter, setSeries }) {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          paddingTop: 2,
          width: "100%",
          mb:2,
          ml:1
        }}
      >
        {series
        .filter(element => {
          return element.title.toLowerCase().includes(filter.toLowerCase())
        })
        .map((serie) => {
          return (
            <Grid item xs = {12} md = {6} lg = {4}>
              <Card serie={serie} series = {series} setSeries = {setSeries} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
