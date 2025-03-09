import Blog from "./components//Blog.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./LoginPage";
import "./App.css";
function App() {
  const [user, setUser] = useState({});

  const blogsData = [
    {
      postedBy: 123,
      name: "Tech-Expo",
      userId: 123,
      blogId: 1,
      date: new Date().toISOString(),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageURL:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tiretechnologyinternational.com%2Fwp-content%2Fuploads%2F2019%2F03%2FIMG_3576.jpg&tbnid=OiVwpuzCrG0LLM&vet=12ahUKEwjendv4wuaEAxVsK9AFHT5vA94QMyhEegUIARDsAQ..i&imgrefurl=https%3A%2F%2Fwww.tiretechnologyinternational.com%2Fnews%2Fshow-news%2Fshow-report-tire-technology-expo-2019.html&docid=FZMpk_TEjqFHZM&w=700&h=335&q=tech%20expo&hl=en-US&ved=2ahUKEwjendv4wuaEAxVsK9AFHT5vA94QMyhEegUIARDsAQ",
      categories: ["Academic Resources", "Technology", "Health and Wellness"],
    },
    {
      postedBy: 1,
      userId: 1,
      blogId: 2,
      name: "Local Community Resources",
      date: new Date().toISOString(),
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageURL:
        "https://i.pinimg.com/originals/ab/02/61/ab0261623e9c95cd1de06e16efebe1bb.jpg",
      categories: ["Career Services", "Local Community Resources", "Social"],
    },
    {
      postedBy: 321,
      userId: 321,
      blogId: 3,
      name: "Sports energy",
      date: new Date().toISOString(),
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageURL:
        "https://unsplash.com/photos/a-group-of-men-playing-a-game-of-basketball-wdTpPg4ukd8",
      categories: ["Campus", "Culture", "Sports"],
    },
  ];
  const usersD = [
    {
      name: "John Doe",
      userId: 123,
      age: 25,
      role: "STUDENT",
      email: "john.doe@example.com",
      password: "password123",
    },
    {
      name: "Guest Doe",
      userId: 18,
      age: 25,
      role: "GUEST",
      email: "john.doe@example.com",
      password: "123456",
    },
    {
      name: "Shubham Gupta",
      userId: 1,
      age: 25,
      role: "MODERATOR",
      email: "sg@gmail.com",
      password: "123456",
    },
    {
      name: "Jane Smith",
      userId: 456,
      age: 30,
      role: "MODERATOR",
      email: "disable@gmail.com",
      password: "123456",
    },
    {
      name: "admin",
      userId: 789,
      age: 40,
      role: "ADMINISTRATOR",
      email: "admin@gmail.com",
      password: "123456",
    },
    {
      name: "Bob Brown",
      userId: 321,
      age: 22,
      role: "STUDENT",
      email: "bob.brown@example.com",
      password: "password321",
    },
    {
      name: "Emily Davis",
      userId: 654,
      age: 35,
      role: "MODERATOR",
      email: "emily.davis@example.com",
      password: "password654",
    },
    {
      name: "Michael Wilson",
      userId: 987,
      age: 45,
      role: "ADMINISTRATOR",
      email: "michael.wilson@example.com",
      password: "password987",
    },
  ];
  const [users, setUsers] = useState(usersD);
  const [blogs, setBlogs] = useState(blogsData);
  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };
  const addNewBlog = (blogData) => {
    setBlogs([...blogs, blogData]);
  };
  const deleteBlog = (blogId) => {
    const updatedBlogs = blogs.filter((blog) => blog.blogId !== blogId);

    setBlogs(updatedBlogs);
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path='/'
            element=<SignIn
              handleLogin={handleLogin}
              blogs={blogs}
              users={users}
            />
          />
          <Route
            path='/blog'
            element=<Blog
              user={user}
              totalBlogs={blogs.length}
              totalBlogsData={blogs}
              addNewBlog={addNewBlog}
              deleteBlog={deleteBlog}
            />
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
