import "./App.css";
import { Paper } from "@material-ui/core";
import styled from "styled-components";
import DarkTheme from "./themes/DarkTheme";
import Home from "./containers/Home";
import Vision from "./containers/Vision";
import WhoWeAre from "./containers/WhoWeAre";
import Principles from "./containers/Principles";
import Island from "./containers/Island";
import Practical from "./containers/Practical";
import { Route, Switch } from "react-router-dom";
import Accommodation from "./containers/Accommodation";
import Faq from "./containers/Faq";
import Music from "./containers/Music";
import Art from "./containers/Art";
import Hangout from "./containers/Hangout";
import Map from "./containers/Map";
import Location from "./containers/Location";
import ThemeProvider from "./themes/ThemeProvider";

const BackgroundPaper = styled(Paper)`
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <BackgroundPaper>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/vision">
            <Vision />
          </Route>

          <Route path="/who-we-are">
            <WhoWeAre />
          </Route>

          <Route path="/principles">
            <Principles />
          </Route>

          <Route path="/island">
            <Island />
          </Route>

          <Route path="/practical">
            <Practical />
          </Route>

          <Route path="/location">
            <Location />
          </Route>

          <Route path="/accommodation">
            <Accommodation />
          </Route>

          <Route path="/faq">
            <Faq />
          </Route>

          <Route path="/map">
            <Map />
          </Route>

          <Route path="/music">
            <Music />
          </Route>

          <Route path="/art">
            <Art />
          </Route>

          <Route path="/hangout">
            <Hangout />
          </Route>
        </Switch>
      </BackgroundPaper>
    </ThemeProvider>
  );
}

export default App;
