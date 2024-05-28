'use client';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: "#218380",//teal
                dark: "#145250",//dark slated grey
                light: "#73D2DE",//non photo blue
                contrastText: "#fff",
            },
            secondary: {
                main: "#D81159",//rasberry
                dark: "#8F2D56",//amaranth purple
                light: "#F1558E",//french rose
                contrastText: "#fff",
            },
            contrast:{
                main: "#FFBC42",//xanthous
                dark: "#F59F00",//gamboge
                light: "#FFCD70",//sunglow
            }
        }
    })

    export default theme