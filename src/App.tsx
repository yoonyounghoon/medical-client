import Footer from 'components/Footer/Footer';
import PageNotFound from 'components/PageNotFound';
import PharmacyDetail from 'components/PharmacyList/PharmacyDetail';
import Sidebar from 'components/Sidebar';
import CovidPage from 'pages/CovidPage';
import MedicalCheckPage from 'pages/MedicalCheckPage';
import PharmacyPage from 'pages/PharmacyPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={MedicalCheckPage} />
        <Route path="/covid" component={CovidPage} />
        <Route path="/pharmacy" exact component={PharmacyPage} />
        <Route path="/pharmacy/:id" component={PharmacyDetail} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
