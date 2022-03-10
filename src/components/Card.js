import React, { useState } from "react";
import {
  Box,
  Card as MaterialCard,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Card({ serie, series, setSeries }) {

  function handleLikes(e, newValue) {
    let newSeries = [...series];
    let index = newSeries.indexOf(serie);
    console.log(index)
    newSeries[index].likes = newValue;
    setSeries(newSeries);
  }

  return (
    <MaterialCard
      elevation={7}
      sx={{
        height: 500,
        width: 300,
        padding: 1,
        boxSizing: "border-box",
        bgcolor: grey[300],
        position: "relative",
      }}
    >
      <CardMedia sx={{ pt: 1 }}>
        <img
          src={serie.img}
          height="250px"
          width="90%"
          style={{ borderRadius: 11 }}
        />
      </CardMedia>
      <CardContent
        sx={{
          paddingTop: 0.5,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ lineHeight: "24px", pt: 1 }}
          >
            {serie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {serie.author}
          </Typography>
          <Typography variant="body2" color="text.primary" textAlign="left">
            {serie.desc}
          </Typography>
        </Box>
        <Rating
          sx={{
            color: "#ff6d75",
            "& .MuiRating-iconHover": { color: "#ff3d47" },
            position: "absolute",
            bottom: "7px",
            right: "90px",
          }}
          name="rating"
          precision={0.5}
          size="large"
          value={serie.likes}
          onChange={handleLikes}
          icon={<FavoriteIcon />}
          emptyIcon={<FavoriteIcon />}
        />
      </CardContent>
    </MaterialCard>
  );
}
