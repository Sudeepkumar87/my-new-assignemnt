
import React from 'react'
import { TextField, IconButton, Typography,InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector, useDispatch } from "react-redux";
// import{postLoginData} from "../../../reducer/api/GetApiAction"

const Search = ({searchTerm,onChange}) => {
   const nameSelector =useSelector((state)=>state)
  const mainName=nameSelector?.get?.Login?.userName
  return (
    <div>
<Box sx={{background:"#ff742b",padding:"2%"}}>
    <Box sx={{display:"flex",alignItems:"center",gap:"2rem"}}>

 
    <Box>
    <Typography sx={{fontSize:"18px", color:"#000"}}>{mainName}</Typography>
    </Box>
  <Box>
  <TextField
  variant="outlined"
  placeholder="Search stories by title, url, or author"
  size="small"
  value={searchTerm}
  onChange={onChange} 
  sx={{
    background: "#fff", 
    borderRadius: "4px",
    boxShadow: "none",
    width: "70rem",
    "@media (min-width: 1024px) and (max-width: 1434px)": {
      width: "52rem",
    },
    "@media (min-width: 768px) and (max-width: 1023px)": {
      width:"36rem"
    },
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon sx={{ color: "#ff742b", width: "24px", height: "24px" }} />
      </InputAdornment>
    ),
  }}
/>
  </Box>
  <Box>
    <SettingsIcon/>
  </Box>
  </Box>
  </Box>
    </div>
  )
}
export default Search
