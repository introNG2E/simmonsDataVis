import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


//Pages
import EmailEntry from './pages/EmailEntry'
import adminEntry from './pages/adminEntry'
import adminPanel from './pages/adminPanel'
import Homepage from './pages/Homepage'

import SurveyPage from './pages/SurveyPage'
import DataPage from './pages/DataPage'
import StatisticsPage from './pages/StatisticsPage'


//Components
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/App.css'

function App() {


const [unlock, setUnlock] = useState(0);
const fakeAuth = {
  isAuthenticated: unlock,//times out and signs out of admin login after some time
  authenticate(cb) {
    this.isAuthenticated = 1
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = 0
    setTimeout(cb, 100)
  }
}


const PrivateRoute = ({ component: Component, ...rest }) => (//private route
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === 0
      ? <Component {...props} />
      : <Redirect to='/admin' />
  )} />
)


  function getIdFromUrl() {
    const params = window.location.href.split('/')
    return params[params.length - 1]
  }

  return (
      <Router>
          <div className='container'>
              <Header />
              <main>

                  <Switch> 
                    <Route exact path="/homepage/:userId" render={(props) => <Homepage {...props} getId={getIdFromUrl()} />}/>
                    <Route exact path="/survey/:userId" render={(props) => <SurveyPage {...props} getId={getIdFromUrl()} />} />
                    <Route exact path="/data/:userId" render={(props) => <DataPage {...props} getId={getIdFromUrl()} />}/>
                    <Route exact path="/admin" component={adminEntry} />
                    <PrivateRoute path="/adminPanel" component={adminPanel}/>
                    <PrivateRoute path="/statistics" component={StatisticsPage}/>
                    <Route component={EmailEntry} /> 
                  </Switch>

              </main>
            <Footer/>
          </div>
      </Router>
  );
}

export default App;