import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import BootcampMain from './components/ContenidoBootcamp/BootcampMain';
import Posts from './components/GeekMain/Posts';
import Main from "./components/Main";
import ForumMain from './components/SocialForum/ForumMain';
import TaskMain from './components/Task/TaskMain';
import PortfolioMain from './components/PortfolioEvidence/PortfolioMain';
import DocMain from './components/RegulatoryDoc/DocMain';
import ParticipantsMain from './components/Participants/ParticipantsMain';
import InstructorsMain from './components/Instructors/InstructorsMain';
import LoginInstructores from './components/Administrador/LoginInstructores'
import AdministradorMain from './components/Administrador/AdministradorMain'

function App() {
  return (
    <div>
      <BrowserRouter>

        <Switch>

          <Route path="/Home" exact
            render={(props) => <Home {...props} />}>
          </Route>

          <Route path="/Login" exact
            render={(props) => <Login {...props} />}>
          </Route>

          <Route path="/Posts" exact
            render={(props) => <Main {...props}
              contentComponent={Posts} />}>
          </Route>

          <Route path="/BootcampMain" exact
            render={(props) => <Main {...props}
              contentComponent={BootcampMain} />}>
          </Route>

          <Route path="/ForumMain" exact
            render={(props) => <Main {...props}
              contentComponent={ForumMain} />}>
          </Route>

          <Route path="/TaskMain" exact
            render={(props) => <Main {...props}
              contentComponent={TaskMain} />}>
          </Route>

          <Route path="/Cronograma-general" exact
            render={(props) => <Main {...props}
              contentComponent={PortfolioMain} />}>
          </Route>

          <Route path="/DocMain" exact
            render={(props) => <Main {...props}
              contentComponent={DocMain} />}>
          </Route>

          <Route path="/ParticipantsMain" exact
            render={(props) => <Main {...props}
              contentComponent={ParticipantsMain} />}>
          </Route>

          <Route path="/InstructorsMain" exact
            render={(props) => <Main {...props}
              contentComponent={InstructorsMain} />}>
          </Route>

          {/* enrutamiento de los componentes de los instructores */}

          <Route path="/LoginInstructores" exact
            render={(props) => <LoginInstructores {...props} />}>
          </Route>

          <Route path="/AdministradorMain" exact
            render={(props) => <AdministradorMain {...props} />}>
          </Route>

          {/* enrutamiento raiz del proyecto */}

          <Route path="/" exact render={(props) =>
            <Redirect {...props} to="/Home"></Redirect>}>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
