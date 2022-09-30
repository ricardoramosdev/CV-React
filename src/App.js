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

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header />
        <Content className="content-container">
          <Home/>
          <AboutMe/>
          <Skills/>
          <AllProjects/>
        </Content>
        <Sidemenu/>

        <Footer style={{ textAlign: "center" }}>
          My Portfolio ©2022 Created by Ricardo Ramos
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
