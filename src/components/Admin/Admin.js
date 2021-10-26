import React, {useState} from 'react';
import './Admin.css';
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import AddProducts from '../AddProducts/AddProducts';
import Container from '@mui/material/Container';


const Admin = () => {
    const [admin, setAdmin] = useState('manage')
    return (
        <div className="admin-wrapper">
            <div className="side-bar">
                <div className="div">
                <h2>Fresh valley</h2>
                <ul className="items">
                    <li onClick={() => setAdmin('manage')}> <BsFillGridFill /> Manage Products</li>
                    <li onClick={() => setAdmin('add')}> <AiOutlinePlus/> Add Product</li>
                    <li onClick={() => setAdmin('edit')}> <AiFillEdit /> Edit Product</li>
                </ul>
                </div>
            </div>
            <Container fixed className="content-wrapper">
                {
                    admin === 'manage' && <h1>this is manage</h1>
                }
                {
                    admin === 'add' && <AddProducts />
                }
                {
                    admin === 'edit' && <h1>Edit Product</h1>
                }
            </Container>
        </div>
    );
};

export default Admin;