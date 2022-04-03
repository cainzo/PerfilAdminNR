import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Buscar..."></input>
          <SearchOutlinedIcon className="icono"></SearchOutlinedIcon>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icono"></LanguageOutlinedIcon>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icono" onClick={()=>dispatch({type:"TOGGLE"})}></DarkModeOutlinedIcon>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icono"></FullscreenExitOutlinedIcon>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icono"></NotificationsNoneOutlinedIcon>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icono"></ChatBubbleOutlineOutlinedIcon>
            <div className="counter">2</div>

          </div>
          <div className="item">
            <ListOutlinedIcon className="icono"></ListOutlinedIcon>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/10055307/pexels-photo-10055307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="avatar"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
