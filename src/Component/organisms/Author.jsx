import React from "react";
import {
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  Box,
} from "@mui/material";
const Author = ({ selectedText, daysAgo }) => {
  return (
    <>
      <Box>
        
        {selectedText.map((item) => (
          <Box >
          <Box sx={{display:"flex",alignItems:"center",gap:"2px",}}>
          <Typography sx={{ fontSize: "18px" }}>
            {item?.author}
          </Typography>
          (
            <a
              href={item?.url}
              target="_blank"
              style={{
                color: "#828282",
                listStyle: "none",
                textDecoration: "none",
                fontSize: "13px",
                "@media (min-width: 768px) and (max-width: 1023px)": {
                  fontSize: "9px",
                },

              }}
            >
              {item?.url}
            </a>
            )
            
          </Box>
          <Box sx={{ display: "flex" }}>
        <Typography>{item?.title}</Typography>||
        <Typography>{`${daysAgo} days ago`}</Typography>
      </Box>
          </Box>
          
        ))}
      </Box>
      <Box>

      </Box>
   
    </>
  );
};

export default Author;
