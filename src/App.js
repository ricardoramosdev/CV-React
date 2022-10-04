import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import "./App.css";
import "antd/dist/antd.css";
import { Header } from "./Sections/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import { Sidemenu } from "./Sections/Sidemenu/Sidemenu";
import { Skills } from "./Pages/Skills/Skills";
import { FavoriteProjects } from "./Pages/Projects/FavoritesProjects/FavoriteProjects";
import { AllProjects } from "./Pages/Projects/AllProjects/AllProjects";
import { Context } from "./Context/Context";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
function App() {
 
 useEffect(()=>{
  AOS.init({duration:2000,
  offset:70});

 },[])
    
  
  return (
    <div className="App">
      
      <Context>
      <Layout className="layout">
        <Header />
        <Content className="content-container">
          <Home/>
          <AboutMe/>
          <Skills/>
          <FavoriteProjects />

        </Content>
        <Sidemenu/>

        <Footer style={{ textAlign: "center" }}>
          My Portfolio ©2022 Created by Ricardo Ramos
        </Footer>
      </Layout>
      </Context>
     
    </div>
  );
}

export default App;
