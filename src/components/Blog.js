import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const sections = [
  { title: "Academic Resources", url: "#" },
  { title: "Career Services", url: "#" },
  { title: "Campus", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Local Community Resources", url: "#" },
  { title: "Social", url: "#" },
  { title: "Sports", url: "#" },
  { title: " Health and Wellness", url: "#" },
  { title: "Technology", url: "#" },
  { title: "Travel", url: "#" },
  { title: "Alumni", url: "#" },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const defaultTheme = createTheme();

export default function Blog({
  user,
  blogs,
  totalBlogs,
  addNewBlog,
  totalBlogsData,
  deleteBlog,
}) {
  const title = `Blog - ${user.name} ${user.role}`;

  const sortedBlogs = [...totalBlogsData];
  const top3Blogs = sortedBlogs;
  const mainFeaturedPost = sortedBlogs[0];
  const featuredPosts = top3Blogs;

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header
          user={user}
          title={title}
          sections={sections}
          totalBlogs={totalBlogs}
          addNewBlog={addNewBlog}
        />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <Grid item key={post.blogId} xs={12} sm={6} md={4}>
                <FeaturedPost
                  key={post.blogId}
                  post={post}
                  role={user.role}
                  deleteBlog={deleteBlog}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title='From the firehose' posts={"latestBlog"} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title='Footer'
        description='Something here to give the footer a purpose!'
      />
    </ThemeProvider>
  );
}
