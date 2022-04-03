import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo"> logo del diario</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="titulos">Principal</p>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <DashboardIcon className="icono"></DashboardIcon>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="titulos">Listas</p>
          <Link to="/users" style={{textDecoration: "none"}}>
          <li>
            <SupervisedUserCircleIcon className="icono"></SupervisedUserCircleIcon>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/noticias" style={{textDecoration: "none"}}>
          <li>
            <NewspaperIcon className="icono"></NewspaperIcon>
            <span>Noticias</span>
          </li>
          </Link>
          <p className="titulos">Perfil de admin</p>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <CircleNotificationsIcon className="icono"></CircleNotificationsIcon>
            <span>Notificaciones</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <SettingsIcon className="icono"></SettingsIcon>
            <span>Configuraciones</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <PeopleIcon className="icono"></PeopleIcon>
            <span>Perfil</span>
          </li>
          </Link>

          <li>
            <ExitToAppIcon className="icono"></ExitToAppIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
