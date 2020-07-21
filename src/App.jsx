import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

// Pages
import Home from '../Pages/Home';

const App = () => (
  <main>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </main>
);

export default App;
