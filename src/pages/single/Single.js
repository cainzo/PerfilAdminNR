import './single.scss';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Charts from "../../components/charts/Charts";
import List from "../../components/table/Table";

const Single = () => {
    return (
        <div className='single'>
            <Sidebar></Sidebar>
            <div className="singleContainer">
                <Navbar></Navbar>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="titulo">Informacion</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="itemImg" />
                            <div className="detalles">
                                <h1 className="itemTitle">Gonzalo cainzo</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">cainzoG@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Telefono:</span>
                                    <span className="itemValue">+54381065139</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Edad:</span>
                                    <span className="itemValue">31</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Pais:</span>
                                    <span className="itemValue">Argentina</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Charts aspect={2/1} title="Gastado los ultimos 6 meses"></Charts>
                    </div>
                </div>
                <div className="bottom">
                <h1 className="titulo">Ultimas transacciones</h1>
                    <List></List>
                </div>
            </div>
           
        </div>
    );
};

export default Single;