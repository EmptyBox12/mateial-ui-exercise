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

export default function Card({ serie }) {
  const [value, setValue] = useState(0);

  return (
    <MaterialCard
      elevation={5}
      sx={{
        height: 470,
        width: 280,
        padding: 1,
        boxSizing: "border-box",
        bgcolor: grey[300],
        position:"relative"

      }}
    >
      <CardMedia sx={{ pt: 1 }}>
        <img
          src={serie.img}
          height="250px"
          width="90%"
          style={{ borderRadius: "5px" }}
        />
      </CardMedia>
      <CardContent
        sx={{
          paddingTop: 0.5,
          // display:"flex",
          // flexDirection:"column",
          // alignItems:"center",
          // justifyContent:"space-between",
          // height:"170px"
        }}
      >
        <Box>
          <Typography variant="h6" component="div" sx={{ lineHeight: "24px", pt:1 }}>
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
            position:"absolute",
            bottom:"7px",
            right:"79px"
          }}
          name="rating"
          precision={0.5}
          size="large"
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
          }}
          icon={<FavoriteIcon />}
          emptyIcon={<FavoriteIcon />}
        />
      </CardContent>
    </MaterialCard>
  );
}
