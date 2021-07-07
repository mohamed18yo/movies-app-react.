import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/Movie/movie";
import {Switch, Route} from 'react-router'

function App() {
  return (
    <MainContainer>
      <Nav />
      <Switch>
      <Route exact={true} path={"/"} component={HomeScreen} />
      <Route  path={"/movie/:id"} component={MovieScreen} />
      </Switch>
      {/* <MovieScreen /> */}
    </MainContainer>
  );
}

export default App;
