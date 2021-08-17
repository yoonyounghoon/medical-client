import Footer from 'components/Footer/Footer';
import HospitalDetail from 'components/HospitalList/HospitalDetail';
import PageNotFound from 'components/PageNotFound';
import PharmacyDetail from 'components/PharmacyList/PharmacyDetail';
import Sidebar from 'components/Sidebar';
import useDarkMode from 'hooks/useDarkMode';
import MedicalCheckPage from 'pages/MedicalCheckPage';
import PharmacyPage from 'pages/PharmacyPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'theme';
import { GlobalStyle } from 'theme/global-styles';

function App() {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === 'light' ? { mode: light } : { mode: dark };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Sidebar toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/" exact component={MedicalCheckPage} />
          <Route path="/hospital/:id" exact component={HospitalDetail} />
          <Route path="/pharmacy" exact component={PharmacyPage} />
          <Route path="/pharmacy/:id" component={PharmacyDetail} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
