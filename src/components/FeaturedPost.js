import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";
import { Divider } from "@mui/material";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
});

const StyledCardContent = styled(CardContent)({
  flex: "1 1 auto",
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
});

const TruncatedTypography = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

function FeaturedPost(props) {
  const { post, role, deleteBlog } = props;
  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }
  console.log("post.imageURL", post.imageURL);
  return (
    <StyledCard>
      <StyledCardMedia style={{ backgroundImage: `url(${post.imageURL})` }} />
      <Divider />
      <StyledCardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {post.name}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {formatDate(post.date)}
        </Typography>
        <TruncatedTypography
          variant='body2'
          color='textSecondary'
          component='p'
        >
          {post.description}
        </TruncatedTypography>
      </StyledCardContent>
    </StyledCard>
  );
}

export default FeaturedPost;
