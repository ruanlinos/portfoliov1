import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Nav from '../components/Nav';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <GlobalStyle />
    </ThemeProvider>
  );
}
