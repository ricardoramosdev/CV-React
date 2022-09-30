import { Button, Drawer, Menu } from 'antd';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuOutlined} from '@ant-design/icons'
import './Header.scss';


export const Header = () => {
    const items = [
        {label:(<a href='#home'>Home</a>),key:1},
        {label:(<a href='#aboutMe'>About Me</a>),key:2},
        {label:(<a href='#skills'>Skills</a>),key:3},
        {label:(<a href='#projects'>Projects</a>),key:4},
        {label:(<a href='#callToAction'>Say Hello</a>),key:5}
    ]
    //Defino estados y funciones para mostrar menu lateral en dispositvos moviles o pantallas reducidas
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  return (
    <>
    <div className="navbar">
        <div className="logo"><h1>RR</h1></div>
        
      <Menu
        className='menu'
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        
      />
      <div className="burger-menu">
      <Button type="ghost" onClick={showDrawer} style={{height:'100%',border:'none'}}>
          <MenuOutlined/>  
      </Button>
      <Drawer title="RR" placement="right" onClose={onClose} open={open}>
      <Menu
        className='menu'
        mode="vertical"
        defaultSelectedKeys={['1']}
        items={items}
        
      />
      </Drawer>
      </div>
    </div>
    </>
  )
}
