import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons'
import { Col } from 'antd'
import React from 'react'
import './Sidemenu.scss'
export const Sidemenu = () => {
  const contactChanel = [
    {name:'GitHub',icon:<GithubFilled/>,URL:'https://github.com/ricardoramosdev'},
    {name:'LinkedIn',icon:<LinkedinFilled/>,URL:'https://www.linkedin.com/in/indricardoramos/'},
    {name:'Mail',icon:<MailFilled/>,URL:'mailto:indricardoramos@gmail.com'},
  ]
  return (
    <>
        <Col className="side-menu" xs={0} sm={3}>
            <ul>
                {contactChanel.map(el=><li key={el.name}><a href={el.URL}>{el.icon}</a></li>)}
            </ul>
        </Col>
    </>
  )
}
