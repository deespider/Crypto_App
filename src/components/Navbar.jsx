import React from 'react';
import { Button, Menu, Topography, Avtar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
        <Avtar />
        <Topography.Title level={2} className="Logo">
            <Link to="/">Cryptoverse</Link>
        </Topography.Title>
        </div>
    </div>
  )
}

export default Navbar