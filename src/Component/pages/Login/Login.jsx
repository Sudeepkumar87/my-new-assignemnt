import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Button, InputAdornment, TextField } from "@mui/material";
import background from "../../assets/background.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSelector, useDispatch } from "react-redux";
import { postLoginData } from "../../../reducer/api/GetApiAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    userName: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Error state to track validation messages
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const formHandleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {
      userName: formValues.userName ? "" : "Username is required",
      password: formValues.password ? "" : "Password is required",
    };

    setErrors(newErrors);

    // If there are any errors, stop the form submission
    if (newErrors.userName || newErrors.password) {
      return;
    }

    const { userName, password } = formValues;

    const response = await dispatch(postLoginData(formValues));
    navigate("/Home");

    console.log("response", response);
  };

  return (
    <Box>
      <Box
        sx={{
          background: `url(${background}) center center / cover`,
          width: "100%",
          height: "732px",
          "@media (min-width: 1024px) and (max-width: 1434px)": {
            height: "521px",
          },
          "@media (min-width: 768px) and (max-width: 1023px)": {
            height: "391px",
          },
          "@media (min-width: 425px) and (max-width: 766px)": {
            height: "347px",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={formHandleSubmit}>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "50px",
                paddingBottom: "1rem",
                paddingTop: "10rem",
                "@media (min-width: 768px) and (max-width: 1023px)": {
                  paddingTop: "3rem",
                },
                "@media (min-width: 425px) and (max-width: 766px)": {
                  paddingTop: "1rem",
                },
              }}
            >
              Login
            </Typography>
            <Box>
              <TextField
                type="text"
                name="userName"
                placeholder="Enter your userName"
                value={formValues.userName}
                onChange={handleInputChange}
                sx={{
                  width: "384px",
                  height: "48px",
                  borderRadius: "37px",
                  marginBottom: "1rem",
                  backgroundColor: "#fff",
                }}
                error={Boolean(errors.userName)}
                helperText={errors.userName}
              />
            </Box>
            <Box>
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                value={formValues.password}
                onChange={handleInputChange}
                sx={{
                  width: "384px",
                  height: "48px",
                  borderRadius: "37px",
                  backgroundColor: "#fff",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </span>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
            </Box>
            <Button
              type="submit"
              sx={{
                color: "#FFFFFF",
                width: "384px",
                height: "56px",
                background: "#4254EA",
                borderTopLeftRadius: "30px",
                WebkitBorderTopRightRadius: "30px",
                marginTop: "2rem",
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;




// import React,{useState} from "react";
// import Box from "@mui/material/Box";
// import { Typography,Button, InputAdornment,
//   TextField} from "@mui/material";
// import background from "../../assets/background.png"
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { useSelector, useDispatch } from "react-redux";
// import{postLoginData} from "../../../reducer/api/GetApiAction"
// import { useNavigate } from "react-router-dom";

// const Login = () => {
// const navigate = useNavigate()

  
//   const dispatch = useDispatch();
//   const [formValues, setFormValues] = useState({
//     userName: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange=(e)=>{
//     setFormValues({...formValues, [e.target.name]:e.target.value})
//   }
//   const formHandleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = formValues;
    
  
//     const response = await dispatch(postLoginData(formValues));
//     navigate("/Home")
  
//     console.log("response", response);
//   };
  


//   return (
//     <Box>

// <Box
//         sx={{
//           background: `url(${background}) center center / cover`,

//           width: "100%",
//           height: "732px",
//           "@media (min-width: 1024px) and (max-width: 1434px)": {
//             height: "521px",
//           },
//           "@media (min-width: 768px) and (max-width: 1023px)": {
//             height: "391px",
//           },
//           "@media (min-width: 425px) and (max-width: 766px)": {
//             height: "347px",
//           },
//         }}
//       >
     
//         <Box sx={{display:"flex", justifyContent:"center"}}>
//         <form onSubmit={formHandleSubmit}>
//           <Typography
//             sx={{
//               color: "#FFF",
//               fontSize: "50px",
//               paddingBottom: "1rem",
//               paddingTop: "10rem",
//               "@media (min-width: 768px) and (max-width: 1023px)": {
//                 paddingTop: "3rem",
//               },
//             }}
//           >
//             Login
//           </Typography>
//           <Box>
//             <TextField
//               type="text"
//               name="userName"
//               placeholder="Enter your userName"
//               value={formValues.userName}
//               onChange={handleInputChange}
              
             
         
//               sx={{
//                 width: "384px",
//                 height: "48px",
//                 borderRadius: "37px",
//                 marginBottom: "1rem",
//                 backgroundColor: "#fff",
             
//               }}
//             />
//           </Box>
//           <Box>
//             <TextField
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               placeholder="Enter password"
//               value={formValues.password}
//               onChange={handleInputChange}
              
        
     
//               sx={{
//                 width: "384px",
//                 height: "48px",
//                 borderRadius: "37px",
//                 backgroundColor: "#fff",
             
//               }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <span
//                       onClick={() => setShowPassword(!showPassword)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       {showPassword ? (
//                         <VisibilityOffIcon />
//                       ) : (
//                         <VisibilityIcon />
//                       )}
//                     </span>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Box>
//           <Button
//             type="submit"
//             sx={{
//               color: "#FFFFFF",
//               width: "384px",
//               height: "56px",
//               background: "#4254EA",
//               borderTopLeftRadius: "30px",
//               WebkitBorderTopRightRadius: "30px",
//               marginTop: "2rem",
//               textTransform:"none"
//             }}
//           >
//             Login
//           </Button>
//         </form>
//         </Box>
       
     
    
//       </Box>

//   </Box>
//   );
// };

// export default Login;
