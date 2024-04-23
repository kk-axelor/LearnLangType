import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography, styled } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { translateWords } from "../utils/feature";
import { useDispatch, useSelector } from "react-redux";
import { getWordSuccess, getWordsFail, getWordsRequest } from "../redux/slices";
import Loader from "./Loader";

const LearningContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const BackButton = styled(Button)(({ theme }) => ({
  width: "fit-content",
}));

const LearingTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  letterSpacing: "3px",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
}));

const NextButton = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontSize: "1.2rem",
  border: "1px solid transparent",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
}));

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const params = useSearchParams()[0].get("lang");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {loading,words} = useSelector((state :{root:StateType}) => state.root)
  useEffect(() => {
    translateWords("hi").then((res) => {
      console.log(res);
    });
  }, []);

  const handleBackButton = () => {
    navigate("/");
  };

  const handleNextButton = () => {
    count <7  ? setCount(count + 1) : navigate("/quiz");
  };

  useEffect(() => {
    dispatch(getWordsRequest())
    translateWords(params as LangType)
      .then((arr) => {
        dispatch(getWordSuccess(arr));
      })
      .catch((err) => getWordsFail(err.message));
  }, []);
if(loading) return <Loader/>

  return (
    <LearningContainer maxWidth={"sm"}>
      <BackButton onClick={handleBackButton}>
        <ArrowBack />
      </BackButton>
      <LearingTitle>Learing Made Easy</LearingTitle>
      <Stack direction={"row"} spacing={"2rem"}>
        <Text>
          {count + 1} - {words[count].word} :{" "}
        </Text>
        <Text> {words[count].meaning} </Text>
        <Text>
          <VolumeUp />
        </Text>
      </Stack>
      <NextButton onClick={handleNextButton}> {count<words.length - 1?"Next":"Submit"}</NextButton>
    </LearningContainer>
  );
};

export default Learning;
