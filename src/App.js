import "./App.css";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/Theme";
import { MainBody, Container } from "./styles/Global.styled";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProject";
import Footer from "./components/Footer";
import { HashLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <HashLoader size={150} color={"#ff6ae8"} loading={loading} />
        </div>
      ) : (
        <ThemeProvider theme={Theme}>
          <MainBody>
            <Container>
              <Showcase />
              <MySkills />
              <MyProjects />
              <Footer />
            </Container>
          </MainBody>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
