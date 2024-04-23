import { Button, Container, Stack, Typography, styled } from "@mui/material"
import { useNavigate } from "react-router-dom"


const languages=[
  {
  name:"Japanese",
  code:"ja"
},
  {
  name:"Hindi",
  code:"hi"
},
  {
  name:"Spanish",
  code:"es"
},
  {
  name:"French",
  code:"fr"
},
]


const HomeContainer = styled(Container)(({theme})=>({
  color:theme.palette.text.primary,
}))

const LanguageStack = styled(Stack)(({ theme }) => ({
  width:"100%",
  display:"flex",
  justifyContent:"center",
  gap:"20px",
  margin:"30px 10px"
  
}))


const LangButton = styled(Button)(({ theme }) => ({
  width:"180px",
  backgroundColor:theme.palette.primary.main,
  color:"#fff",
  "&:hover":{
    backgroundColor:theme.palette.primary.main,
    filter:"brightness(1.2)"
   
  }
}))


const HomeTitle= styled(Typography)(({theme})=>({
   fontSize:"2rem",
  textAlign:"center",
   width:"100%",
   padding:"20px"
}))

const Home = () => {

  const navigate  = useNavigate();
  const languageClickHandler = (code:string) =>{
    navigate(`/learn?lang=${code}`)
  }
  return (
    <HomeContainer>
      <HomeTitle>
            Welcome, Begin your journey of learning
      </HomeTitle>

     <LanguageStack direction={'row'}>
      {
        languages.map((lang)=>(
          <LangButton  key={lang.code} onClick={()=>languageClickHandler(lang.code)}>{lang.name}</LangButton>
        ))
      }
     </LanguageStack>
     <Typography sx={{textAlign:"center"}}>Choose One language from above</Typography>
    </HomeContainer>
  )
}

export default Home
