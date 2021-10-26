import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="search-box">
            <Paper elevation={0}
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Box"
                    inputProps={{ 'aria-label': 'search products' }}
                />



            </Paper>
            <button className="search-btn">Search</button>
        </div>
    );
};

export default SearchBox;