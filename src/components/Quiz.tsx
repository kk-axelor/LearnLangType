import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, styled } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const QuizContainer = styled(Box)(({ theme }) => ({
  margin:"0px auto",
  padding:"20px",
  paddingTop:"40px",
  display:"flex",
  flexDirection:"column",
  gap:"20px",
  color:theme.palette.text.primary
}))

const Title = styled(Typography)(({ theme }) => ({
 fontSize:"2rem"
}))


const QuizWrapper = styled(Box)(({ theme }) => ({
 
}))
const Text = styled(Typography)(({ theme }) => ({
  color:theme.palette.primary.main,
  fontSize:"2rem"

}))

const CustomFormLabel = styled(FormLabel)(({ theme }) => ({
        color:theme.palette.text.primary,
        fontSize:"1.3rem",

}))
const  RadioButton = styled(Radio)(({ theme }) => ({

 border:"white!important"
}))



const NextButton   = styled(Button)(({ theme }) => ({
  width:"100%",
  backgroundColor:theme.palette.primary.main,
  color:"white",
  fontSize:"1.2rem",
  border:"1px solid transparent",
  "&:hover":{
    borderColor:theme.palette.primary.main,
    color:theme.palette.primary.main
  }
 
}))




const Quiz = () => {
  const [result, setResult] = useState<string[]>([])
  const [count, setCount] = useState<number>(0)
  const [ans,setAns] = useState<string>('')
  const navigate = useNavigate();
  const nextHandler = () =>{
    if(count===7){
      navigate("/result")
    }
    setResult(prev =>[...prev,ans])
    setCount(count+1);
    setAns("")
  }

  return (
    <QuizContainer maxWidth={"sm"}>
      <Title>It quiz time</Title>
      <QuizWrapper>
        <Text>{count+1} -  {"Ramdom"}</Text>
        <FormControl>
          <CustomFormLabel >* Meaning</CustomFormLabel>
          <RadioGroup value={ans} onChange={(e)=>setAns(e.target.value)}>
            <FormControlLabel value={"lol1"}
            control={<RadioButton/>}
            label={"Option 1"}
            />
            <FormControlLabel value={"lol2"}
            control={<Radio/>}
            label={"Option 2"}
            />
            <FormControlLabel value={"lol3"}
            control={<Radio/>}
            label={"Option 3"}
            />

          </RadioGroup>
        </FormControl>
      </QuizWrapper>
         <NextButton 
         disabled={ans===''}
         
         onClick={nextHandler}>{count===7 ?"Submit":"Next"}</NextButton>
    </QuizContainer>
  )
}

export default Quiz
