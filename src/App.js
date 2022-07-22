import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import { Container } from "@material-ui/core";
import Trending from "./Page/Trending/Trending";
import Movie from "./Page/Movie/Movie";
import Series from "./Page/Series/Series";
import Search from "./Page/Search/Search";
import SimpleBottomNavigation from "./component/MainNavbar";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movie" component={Movie} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
