import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch} from 'react-router-dom';
import Quiz from './conteiners/Quiz/Quiz';
import QuizList from './conteiners/QuizList/QuizList';
import Auth from './conteiners/Auth/Auth';
import QuizCreator from './conteiners/QuizCreator/QuizCreator';




function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quize-creator' component={QuizCreator} />
        <Route path='/quize/:id' component={Quiz} />
        <Route path='/' component={QuizList} />
      </Switch>
    </Layout>
  );
}

export default App;
