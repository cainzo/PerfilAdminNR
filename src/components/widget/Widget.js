import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PeopleIcon from "@mui/icons-material/People";

const Widget = ({ type }) => {
  let data;
//temp data
const cantidad = 100;
const diff = 20;
  switch (type) {
    case "user":
      data = {
        titulo: "Usuarios",
        isMoney: false,
        link: "Ver todos",
        icon: (<PeopleIcon className="icono" style={{
            backgroundColor: "rgba(255,0,0,0.2)",
            color:"crimson"
        }}></PeopleIcon>),
      };
      break;

    case "order":
      data = {
        titulo: "Orders",
        isMoney: false,
        link: "Ver todos",
        icon: (
          <ShoppingCartOutlinedIcon className="icono" style={{
            backgroundColor: "rgba(218,165,32,0.2)",
            color:"goldenrod"
        }}></ShoppingCartOutlinedIcon>
        ),
      };
      break;
    case "earning":
      data = {
        titulo: "earnings",
        isMoney: true,
        link: "Ver detalle",
        icon: (
          <MonetizationOnOutlinedIcon className="icono" style={{
            backgroundColor: "rgba(0,128,0,0.2)",
            color:"green"
        }}></MonetizationOnOutlinedIcon>
        ),
      };
      break;
    case "balance":
      data = {
        titulo: "Balance",
        isMoney: true,
        link: "Ver detalles",
        icon: (
          <AccountBalanceOutlinedIcon className="icono" style={{
            backgroundColor: "rgba(128,0,128,0.2)",
            color:"purple"
        }}></AccountBalanceOutlinedIcon>
        ),
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="titulo">{data.titulo}</span>
        <span className="counter">{data.isMoney && "$"}{cantidad}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="porcentaje positivo">
          <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
