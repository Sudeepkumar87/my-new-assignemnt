import React from "react";
import { Button, Box } from "@mui/material";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage = { currentPage },
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 3,
      }}
    >
      {pageNumbers.map((item) => (
        <Button
          key={item}
          onClick={() => paginate(item)}
          sx={{
            margin: "0 5px",
            padding: "8px 16px",
            borderRadius: "5px",
            color: "#ff742b",
            border: "1px solid #ff742b",
            // backgroundColor: '#f0f0f0',
            // color: '#007bff',
            "&:hover": {
              // backgroundColor: '#007bff',
              // color: '#fff',
              color: "#ff742b",
              border: "1px solid #ff742b",
            },
            "&.active": {
              // backgroundColor: '#007bff',
              // color: '#fff',
              color: "#ff742b",
              border: "1px solid #ff742b",
              fontWeight: "bold",
            },
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default Pagination;

// import React from 'react'

// const Paginaltion = ({postsPerPage,totalPosts}) => {
//     const pageNumbers=[];
//     for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
//         pageNumbers.push(i)

//     }
//   return (
//     <div>
//       <ul>
//         {pageNumbers.map((item)=>(
//             <li key={item}>
//                 <a href="" sx={{listStyle:"none"}}>{item}</a>
//             </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Paginaltion
