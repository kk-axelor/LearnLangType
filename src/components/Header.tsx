import { DarkMode, Light, LightMode } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
type PropsTypes = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position:"sticky",
 }));

const CustomToolbar = styled(Toolbar)(({theme})=>({
 display:"flex",
 gap:"20px"
}))

const Header = ({ mode, setMode }: PropsTypes) => {
  return (
    <div>
      <CustomAppBar>
        <CustomToolbar>
          <Typography sx={{marginRight:"auto",fontSize:"1.5rem"}}>LearnLang</Typography>
          <Link className="link" to={"/"}>Home</Link>
          <Link className="link" to={"/login"}>Login</Link>
          <Box
              className="icon"
            onClick={() => setMode((prev) => !prev)}
          >
            {mode ? (
              <LightMode sx={{ color: "yellow" }} />
            ) : (
              <DarkMode sx={{ color: "black" }} />
            )}
          </Box>
        </CustomToolbar>
      </CustomAppBar>
    </div>
  );
};

export default Header;
