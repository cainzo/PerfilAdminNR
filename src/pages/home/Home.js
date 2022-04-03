import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Charts from "../../components/charts/Charts";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        home container
        <div className="widgets">
          <Widget type="user"></Widget>
          <Widget type="order"></Widget>
          <Widget type="earning"></Widget>
          <Widget type="balance"></Widget>
        </div>
        <div className="charts">
            <Featured></Featured>
            <Charts aspect={2/1} title="Gastado los ultimos 6 meses"></Charts>
        </div>
        <div className="listContainer">
          <div className="listTitulo">Ultimas transacciones</div>
          <Table></Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
