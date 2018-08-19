import React from 'react'
import {Route, Switch} from 'react-router'
import {BrowserRouter, Link} from 'react-router-dom'
import ExampleOne from './examples/example-one'
import ExampleTwo from './examples/example-two'
import ExampleThree from './examples/example-three'

import '../styles.scss';

const Home = () => {
  return (
    <div className="fc landing-page">
      <div>Intro to Render Props</div>
      <div style={{ marginTop: '15px' }}>
        <Link className="landing-page__examples" to="/01">Example 1</Link>
        <Link className="landing-page__examples" to="/02">Example 2</Link>
        <Link className="landing-page__examples" to="/03">Example 3</Link>
      </div>
    </div>
  )
};

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route
            path={`/01`}
            exact={true}
            component={ExampleOne}
          />
          <Route
            path={`/02`}
            exact={true}
            component={ExampleTwo}
          />
          <Route
            path={`/03`}
            exact={true}
            component={ExampleThree}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
