import React, { useState } from 'react'

import {Html5Outlined, AntDesignOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Skills.scss'
import { faBootstrap, faCss3, faCss3Alt, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import mongoDBLogo from '../../assets/img/logos/mongodb.png'
export const Skills = () => {
    const skillsArray = [
        { name: "HTML",icon:<FontAwesomeIcon icon={faHtml5} />},
        { name: "CSS", icon:<FontAwesomeIcon icon={faCss3Alt} /> },
        { name: "JAVASCRIPT", icon:<FontAwesomeIcon icon={faJs} />},
        { name: "REACTJS", icon:<FontAwesomeIcon icon={faReact} />},
        { name: "BOOSTRAP", icon:<FontAwesomeIcon icon={faBootstrap} /> },
        { name: "ANTDESIGN", icon:<AntDesignOutlined/>},
        { name: "SASS", icon:<FontAwesomeIcon icon={faSass} />},
        { name: "NODE.JS", icon:<FontAwesomeIcon icon={faNodeJs} />},
        { name: "MONGODB", icon:<img src={mongoDBLogo}/>},
      ];
    let skillsQty  = skillsArray.length
    let anguloAvance = Math.PI*2/(skillsQty)
    let calculatePosition = (index)=>{
        let translateX =150*Math.cos(anguloAvance*index)
        let translateY =150*Math.sin(anguloAvance*index)
        return [translateX,translateY]
    } 
    const skillConPosition = skillsArray.map(el=>{
        el.posX=calculatePosition(skillsArray.indexOf(el))[0];
        el.posY=calculatePosition(skillsArray.indexOf(el))[1];
    })
    const [displayTech, setDisplayTech] = useState(skillsArray[3].icon)
    const selectTech = (e)=>{
        setDisplayTech(e.icon)
    }
    // Animacion en  cuanto se revele
    const [show, setShow] = useState(false)
    let skillCircle ;
    window.addEventListener("load", (event) => {
        skillCircle = document.getElementById('skills-circle');
      
        createObserver();
      }, false);
    const createObserver = ()=>{
        let observer;
        let options ={
            threshold: 1.0
          }
        observer = new IntersectionObserver(handleItersect,options);
        observer.observe(skillCircle)
    }
    const handleItersect = (entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                setShow(true)

            }
        })
    }
  return (
    <div className='skills-section' id='skills'>
            <div className='skills-title'><h2>Skills</h2></div>

        <div className="skills-container">
            <div className={show?'spin-out skill-circle':'skill-circle'} id='skills-circle' >
                <div className="displayTech">{displayTech}</div>
                {skillsArray.map(el=><div className='bubble' 
                style={{transform: `translateX(${el.posX}px) translateY(${el.posY}px)`
                   
            }} 
            key={el.name} onClick={()=>selectTech(el)}>{el.icon}</div>)}
            </div>
            
        </div>
    </div>
  )
}
