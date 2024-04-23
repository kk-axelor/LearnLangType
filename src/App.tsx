import { ThemeProvider } from "@emotion/react"
import { Suspense, lazy, useState } from "react"
import { DarkTheme, lightTheme } from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Loader from "./components/Loader"
import { Container, styled } from "@mui/material"
import { generate } from "random-words"


const AppContainer = styled(Container)(({theme})=>({
 backgroundColor:theme.palette.background.default,
 minWidth:"100%",
 minHeight:"100vh",
 height:"fit-content",
 margin:0,

 }))


const Home  = lazy(()=>import("./components/Home"))
const Learning  = lazy(()=>import("./components/Learning"))
const Quiz  = lazy(()=>import("./components/Quiz"))
const Result  = lazy(()=>import("./components/Result"))
const Login  = lazy(()=>import("./components/Login"))



const App = () => {
  const [isDarkMode , setIsDarkMode] = useState<boolean>(true)
  
  return (

    <ThemeProvider theme={isDarkMode?DarkTheme:lightTheme}>
        <BrowserRouter>
        <Header  mode={isDarkMode} setMode={setIsDarkMode}/>
        <AppContainer> 
        <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/learn" element={<Learning/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
        </Suspense>
        </AppContainer>
        </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
