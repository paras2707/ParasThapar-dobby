import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  let userPosts = user
    ? posts.filter(
        (post) => post.creator === (user.result._id || user.result.googleId)
      )
    : posts;

  if (!posts.length && !isLoading) return "No posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {userPosts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
