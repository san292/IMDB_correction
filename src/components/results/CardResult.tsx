import * as React from "react";
import { ResultTrendprops } from "../../interface/api";

import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Card,
  CardHeader,
  Button,
  IconButton,
} from "@mui/material";

import { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { Share, Favorite } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function CardResult({ results }: ResultTrendprops) {
  const [expanded, setExpanded] = React.useState(false);
  const { title, vote, date, poster } = results;

  const formatDate = (date: string | undefined) => {
    date = date?.split("-").reverse().join("/");
    return date;
  };
  const voteToFixed = vote.toFixed(2);

  return (
    <Card sx={{ width: 220,height:300, m: 0.4, fontSize: 16 }}>
      <CardMedia
        component="img"
        height="120"
        image={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={title}
      />

      
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography paragraph>{formatDate(date)}</Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Share />
        </IconButton>
        <Button size="small">plus de Deails</Button>
      </CardActions>
    </Card>
  );
}
