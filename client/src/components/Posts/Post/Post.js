import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <CardContent>
        <Typography className={classes.title} variant="h5">
          {post.title}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          {!post.favorite ? (
            <FavoriteBorderIcon fontSize="small" />
          ) : (
            <FavoriteIcon fontSize="small" />
          )}
          Like
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
