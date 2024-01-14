import React from 'react';

import { GlobalStyles, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageLayout } from './component-library/page-layout';
import { colours } from './constants/colours';
import { RoutePath } from './constants/routes';
import { HomePage } from './pages/homepage';

/**
 * The app should be wrapped by all things needed on every page in the application.
 * Routing is required on every page so should be placed here.
 */
export const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: colours.primaryThemeColour,
        contrastText: '#fff',
      },
      secondary: {
        main: colours.elevatedComponentColour,
        contrastText: colours.primaryThemeColour,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: colours.pageBackgroundColour },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.HOMEPAGE} element={<PageLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
