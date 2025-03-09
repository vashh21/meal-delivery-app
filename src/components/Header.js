import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ModalForm from "./ModalForm";

function Header(props) {
  const { sections, title, user, totalBlogs, addNewBlog } = props;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const handleCreatePost = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Button size='small' onClick={handleCreatePost}>
            Create Post
          </Button>
          <Typography
            component='h2'
            variant='h5'
            color='inherit'
            align='center'
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant='outlined' size='small' onClick={handleLogout}>
            Log Out
          </Button>
        </Toolbar>
        <Toolbar
          component='nav'
          variant='dense'
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <Link
              color='inherit'
              noWrap
              key={section.title}
              variant='body2'
              href={section.url}
              sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </React.Fragment>

      <ModalForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={user}
        totalBlogs={totalBlogs}
        addNewBlog={addNewBlog}
      />
    </div>
  );
}

export default Header;
