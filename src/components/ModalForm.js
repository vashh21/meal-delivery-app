import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ModalForm({ isOpen, onClose, user, totalBlogs, addNewBlog }) {
  const [postData, setPostData] = useState({
    postedBy: user.userId,
    userId: user.userId,
    blogId: 1 + totalBlogs,
    imageURL: "",
    date: new Date().toISOString().substr(0, 10),
    category: "",
    name: "",
    description: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewBlog(postData);
    setPostData({
      postedBy: user.userId,
      userId: user.userId,
      blogId: 1 + totalBlogs,
      imageURL: "",
      date: new Date().toISOString().substr(0, 10),
      category: "",
      name: "",
      description: "",
    });
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Enter the Post Details
        </Typography>
        <Box component='form' onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin='normal'
            label='Post Name'
            variant='outlined'
            name='name'
            value={postData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin='normal'
            label='Image URL'
            variant='outlined'
            name='imageURL'
            value={postData.imageURL}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin='normal'
            label='Description'
            variant='outlined'
            multiline
            rows={4}
            name='description'
            value={postData.description}
            onChange={handleChange}
          />
          <Button type='submit' variant='contained' color='primary'>
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalForm;
