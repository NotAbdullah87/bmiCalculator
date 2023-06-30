import React from 'react'
import Box from '@mui/material/Box';
import MaleIcon from '@mui/icons-material/Male';
import { Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FemaleIcon from '@mui/icons-material/Female';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import './main.css'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const stackStyle = {
    textAlign : "center",
    alignItems : "center" , 
    justifyContent : "center"
}

const iconStyle ={
    fontSize : "45px",
    color : "white"
}

const iconTypographyStyle ={
        fontSize : "16px",
        fontFamily : "poppins",
        color : "white"
}

const modalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //  width:100 ,
    // width :500,
    bgcolor: '#1d1f33',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const maleActive = {backgroundColor : "white"};

const Main = () => {

    const [height,setHeight] = useState("60"); 
    const [weight,setWeight] = useState(0) ;
    const [age,setAge] = useState(0); 
    const [bmi,setBMI] = useState(0); 
    const [Modalopen, setModalOpen] = React.useState(false);

    const [maleBoxColor,setMaleBoxColor] = useState("");
    const [femaleBoxColor,setFemaleBoxColor] = useState(""); 

    // THE COLOR OF BMI RESULT 
    const [resultColor , setResultColor] = useState("#ffff"); 

  function setMale()
  {
          console.log("Male Button Has been Pressed \n"); 
            setFemaleBoxColor(""); 
            setMaleBoxColor("2px solid #ffff");
          }

  function setFemale()
  {
        // famale has called this function 
        setMaleBoxColor(""); 
        setFemaleBoxColor("2px solid #ffff"); 
  }

    function handleModalOpen(){
        showBMI(); 
        setModalOpen(true);
    
     
    }
    const handleModalClose = () => setModalOpen(false);
    
    
    
    function showBMI()
    {
        let mSquare = height * height ; 
        let kg = weight  ; 
        let b = kg/mSquare ;
        b = b * 100 ; 
        b=b*100;
        b = parseFloat(b).toFixed(2); 
        setBMI(b);
        console.log(bmi); 
    }
    

  return (
   <>
   <Container maxWidth = "s" sx={{
    mt : 2,

    }}>
   <Grid container spacing={1} sx={{
        alignItems : "center",
        justifyContent : "center"
   }}>
        <Grid  item xs ={6}>
            {/* BOX 1 MALE  */}
            <Box id="maleBox" border={maleBoxColor}   sx={{
        flexGrow : 1 ,
        display : 'flex' , 
        flexdirection : 'column'  ,
        alignItems : 'center' ,
        justifyContent : "center",
     backgroundColor : '#1d1f33' ,
        borderColor : "3px solid #ffff",
        borderRadius : "5px",
        height : '120px'
    }}>
    {/* <Box id="maleBox" backgroundColor = '#1d1f33' sx={{
        flexGrow : 1 ,
        display : 'flex' , 
        flexdirection : 'column'  ,
        alignItems : 'center' ,
        justifyContent : "center",
        
        borderRadius : "5px",
        height : '120px'
    }}> */}
   
        <IconButton
           sx={iconStyle}
           onClick={()=>{
            setMale();
        }}
        >
        <Stack sx={stackStyle}>
            <MaleIcon sx={iconStyle}/>
            <Typography sx={iconTypographyStyle}>Male</Typography>
        </Stack>
       
        </IconButton>
        
    </Box>
    </Grid>

    <Grid item xs ={6}>
    <Box border={femaleBoxColor} sx={{
        flexGrow : 1 ,
        display : 'flex' , 
        flexdirection : 'column'  ,
        backgroundColor : '#1d1f33' ,
        justifyContent  : "center",
        alignItems : "center" , 
        borderRadius : "3px" , 
        height : '120px'
    }}>
   
        <IconButton
           sx={iconStyle}
           onClick={()=>setFemale()}
           >
            
        <Stack sx={stackStyle}>
            <FemaleIcon sx={iconStyle}/>
            <Typography sx={iconTypographyStyle}>Female</Typography>
        </Stack>
       
        </IconButton>
        
    </Box>
    
    </Grid>
    </Grid>
    </Container>

    {/* Slider */}
    <Container>
        <Box sx={{
            textAlign : "center",
            mt : "12px",
            backgroundColor : '#1d1f33' ,
            padding : "20px" , 
            borderRadius : "10px"
        }}>
            <Typography variant="h7" sx={{
                 color : "white",
                 fontFamily:"poppins"
            }}>HEIGHT</Typography>
            
            <Typography variant="h6" sx={{
                color : "white" , 
                fontWeight : 600 , 
                fontSize : "30px"
            }}>{height} cm</Typography>
            
            <Slider 
                min ={100}
                max = {200}
                valueLabelDisplay="auto"
                onChange = {(e)=>setHeight(e.target.value)}
                sx={{
                    color : "white",
                }} />
        </Box>
    </Container>

                {/* WEIGHT AND AGE  */}
    <Container maxWidth = "s" sx={{
    mt : 2,

    }}>
   <Grid container spacing={1} sx={{
        alignItems : "center",
        justifyContent : "center"
   }}>
        <Grid item xs ={6}>
            {/* BOX 1 MALE  */}
    <Box sx={{
        flexGrow : 1 ,
        display : 'flex' , 
        flexDirection : "column",
        alignItems : 'center' ,
        justifyContent : "center",
        backgroundColor : '#1d1f33',
        borderRadius : "5px",
        height : '120px',
        padding : "10px"
    }}>
   
        <Stack sx={stackStyle}>
            <Typography sx={{
                color : "white",
                fontFamily : "poppins", 
                mt : "10px"
            }}>WEIGHT</Typography>
            <Typography variant='h4' color = "white">{weight}</Typography>
       </Stack>

       <span>
       <IconButton sx={{color:"white"}}>
            <RemoveCircleIcon sx={{
                fontSize : "35px"
            }} onClick={() =>
            setWeight(weight-1)} />
        </IconButton>

        <IconButton sx={{color : "white",
           
    }}>
            <AddCircleIcon sx={{
                fontSize : "35px"
            }} onClick={(e)=>setWeight(weight+1)} />
        </IconButton>
        </span>
        

    </Box>
    </Grid>

    <Grid item xs ={6}>
    <Box sx={{
        flexGrow : 1 ,
        display : 'flex' , 
        flexDirection : 'column'  ,
        backgroundColor : '#1d1f33' ,
        justifyContent  : "center",
        alignItems : "center" , 
        borderRadius : "3px" , 
        height : '120px' , 
        padding : "10px"
    }}>
   
   <Stack sx={stackStyle}>
            <Typography sx={{
                color : "white",
                fontFamily : "poppins", 
                mt : "10px"
            }}>AGE</Typography>
            <Typography variant='h4' color = "white">{age}</Typography>
       </Stack>

       <span>
       <IconButton sx={{color:"white"}}>
            <RemoveCircleIcon sx={{
                fontSize : "35px"
            }} onClick={() =>
            setAge(age-1)} />
        </IconButton>

        <IconButton sx={{color : "white",
           
    }}>
            <AddCircleIcon sx={{
                fontSize : "35px"
            }} onClick={(e)=>setAge(age+1)} />
        </IconButton>
        </span>
        
        
    </Box>
    
    </Grid>
    </Grid>
    </Container>

            {/* CALCULATE BUTTON */}
            <Container>
            <Button xs={12} variant='contained' fullWidth sx={{
                mt : "20px" , 
                padding : "10px" , 
                backgroundColor : "rgb(221, 70, 70)" , 
                fontFamily : "poppins" , 
                '&:hover': {
                    background: " #b52f2f"
                                 
                    }
            }} onClick={handleModalOpen} >CALCULATE BMI</Button>
            </Container>
            
            <Modal
                open = {Modalopen}
                onClose = {handleModalClose}
            >
                <Box sx={modalBoxStyle} alignContent={'center'} justifyContent={'center'}>
                    {/* <Typography variant="h6" id="BMIresult"  gutterBottom color={resultColor} fontFamily={"poppins"}  >Normal</Typography> */}
                    <Typography variant='h5' sx={{
                        color : "white",
                        fontFamily : "poppins"
                    }} >Your BMI</Typography>
                    <Typography variant = 'h2' sx={{
                        color : "white", 
                        fontFamily : "poppins",
                        fontWeight : 600
                    }}>{bmi}</Typography>
                    <Typography color = "#8e8f99" fontFamily={'poppins'}>Normal BMI range</Typography>
                    <Typography color = "white" fontFamily={'poppins'}>18.5 - 25 kg/m2</Typography>
                </Box>

            </Modal>
  
    <Container sx={{mt : "10px"}}>
        <Box maxWidth sx={{
            backgroundColor:'#1d1f33',
            alignItems : "center",
            textAlign : "center" , 
            justifyContent : "center" ,
            pt : "10px",
            pb : "10px" 
            }}>
            <Typography id='footerText' variant='h9' sx={{color : "white",fontFamily:"poppins"}}>Developed by Abdullah Shakir</Typography>
           <Button href="https://www.linkedin.com/in/abdullah-shakir-107583217/" target="_blank"><LinkedInIcon link sx={{
            color:"white",
            transform : "translateY(-1px)",
        }} />
            </Button>
        </Box>
    </Container>

   </>

  )
}

export default Main