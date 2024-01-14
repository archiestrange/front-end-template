import { Outlet } from 'react-router-dom';

import { Header } from '../header';

/**
 * This page layout wraps the content of every page in the website.
 * Outlet is where the content of the page will sit. Anything else we place in this component will wrap those contents.
 */
export const PageLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
