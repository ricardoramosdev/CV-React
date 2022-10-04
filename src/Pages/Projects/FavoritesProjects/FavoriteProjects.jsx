import { Button, Row ,Col } from "antd";
import React, { useEffect, useState } from "react";
import { useMyContext } from "../../../Context/useMyContext";
import { AllProjects } from "../AllProjects/AllProjects";
import "./FavoriteProjects.scss";

export const FavoriteProjects = () => {
  const context = useMyContext();
  const [featured, setFeatured] = useState([])
  console.log(context)
  const displayFeature = ()=>{
    let myFavorites = context.favorites.sort((a,b)=>a.name.localeCompare(b.name, 'en'));
    setFeatured(myFavorites)
  }
  console.log(context.favorites)
  
  useEffect(() => {
  displayFeature()
}, [])
  console.log(featured)
  return (
    <>
      <div className="featured-projects" id="projects">
        <h2>Check some of my work</h2>
        {featured.map(project=>
          <Row className="favorite-container" key={project.id} gutter={0}>
            <Col className="project-info" xs={24} sm={12} lg={10} >
              <h2 data-aos='reveal'>{project.name}</h2>
              <p data-aos='reveal'>{project.description}</p>
              <div className="techs" >{project.tech.map(el=><button className="tech-btn" data-aos='reveal'>{el}</button>)}</div>
              <Button href={project.URL} target='blank'>Live Project</Button></Col>
            <Col className="project-display" xs={24} sm={12} lg={14} >
              <Row  align="middle" justify="center">
                <Col xs={12}><img className="desktop-img" src={require(`/src/assets/img/projectScreenshots/${project.name}/desktopHome.png`)} alt="" /></Col>
               
                <Col xs={12}><img className="mobile-img" src={require(`/src/assets/img/projectScreenshots/${project.name}/mobile.png`)} alt="" /></Col>
              </Row>
            </Col>
          </Row>
        )}
        
      </div>
      <div className="more-projects">
         <h2>Want to see more projects? </h2>
          <Button>Show me All</Button>
        </div>
    </>
  );
};
