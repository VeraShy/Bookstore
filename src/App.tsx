import React, { useEffect, useState } from 'react';
import Layout from './client/components/Layout/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { Routes , Route } from 'react-router-dom';
import { createColorTheme } from './styles/theme';
import { userRoutes } from './client/routes/userRoutes';
import MainPage from './client/pages/MainPage/MainPage';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { useActions } from './store/Hooks/useActions';
import { auth } from './firebaseConfig';
import PrivateRoute from './client/routes/PrivateRoute';

function App() {
  const colorTheme = createColorTheme();
  const { authorizeUser } = useActions();
  
  initializeApp(firebaseConfig);

  useEffect(() => {
    authorizeUser()
  }, []);

  return (
      <ThemeProvider theme = {colorTheme}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<MainPage />}/>
              {userRoutes.map(({id, path, Component, title, strict}) => {
              return (
                <Route key={id} path={path} element={
                  !strict ? <Component /> : <PrivateRoute> <Component /></PrivateRoute>
                }/>
              );
            })}
            </Route>
          </Routes>
      </ThemeProvider>
      
  );
}

export default App;
