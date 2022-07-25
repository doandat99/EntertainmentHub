import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Trending from "./component/Page/Trending/Trending";
import Movies from "./component/Page/Movies/Movies";
import Search from "./component/Page/Search/Search";
import Series from "./component/Page/TV Series/Series";
import Header from "./component/Header/Header";
import SimpleBottomNavigation from "./component/MainNavbar";
import { Container } from "@material-ui/core";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
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
