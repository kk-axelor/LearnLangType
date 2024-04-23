import { Theme, createTheme } from "@mui/material";

export const DarkTheme:Theme = createTheme({
    palette:{
        primary:{
            main:'#db2777'
        },
        background:{
            default: '#424242',
            
        },
        text:{
            primary:"#fff",
        },
    }

})

export const lightTheme:Theme = createTheme({
    palette:{
        primary:{
            main:"#9333ea"
        },
        text:{
            primary:"#000"
        }
    }

})



