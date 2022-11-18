import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import {
  Container,
  Grow,
  Grid,
  Paper,
  Typography,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import useStyles from "./styles";

const Home = ({ user }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        {user ? (
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  name="search"
                  variant="outlined"
                  label="Search Images"
                  onKeyPress={handleKeyPress}
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ChipInput
                  style={{ margin: "10px 0" }}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="Search Tags"
                  variant="outlined"
                />
                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  color="primary"
                  variant="contained"
                >
                  Search
                </Button>
              </AppBar>
              <Form />
            </Grid>
          </Grid>
        ) : (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Please Sign In to upload your images.
            </Typography>
          </Paper>
        )}
      </Container>
    </Grow>
  );
};

export default Home;
