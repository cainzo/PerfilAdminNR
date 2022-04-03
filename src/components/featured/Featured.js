import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="titulo">Ganancias Totales</h1>
        <MoreVertIcon fontSize="small"></MoreVertIcon>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={50}
            text={"50%"}
            strokeWidth={4}
          ></CircularProgressbar>
        </div>
        <p className="titulo">Todas las ventas de hoy</p>
        <p className="cantidad">$420</p>
        <p className="desc">
          Descriptcion de las transacciones realizadas historicamente. Puede no
          incluir nuevos pagos.{" "}
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitulo">Target</div>
            <div className="itemResultado negativo">
              <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
              <div className="resultadoCantidad">$420k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitulo">Semana Pasada</div>
            <div className="itemResultado positivo">
              <KeyboardArrowUpOutlinedIcon fontSize="small"></KeyboardArrowUpOutlinedIcon>
              <div className="resultadoCantidad">$420k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitulo">Mes Pasado</div>
            <div className="itemResultado positivo">
              <KeyboardArrowUpOutlinedIcon fontSize="small"></KeyboardArrowUpOutlinedIcon>
              <div className="resultadoCantidad">$420k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
