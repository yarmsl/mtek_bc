import { useCallback, useMemo } from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';

interface useRouterOutputInterface {
  /**
   * Ability to go back flag
   */
  canGoBack: boolean;
  /**
   * Navigate to pathname
   * @param pathname - path to page
   */
  goTo: (pathname: string) => void;
  /**
   * Navigate to pathname callback
   * @param pathname - path to page
   */
  goToCb: (pathname: string) => () => void;
  /** Navigate to home page */
  goHome: () => void;
  /** Navigate to previous page */
  goBack: () => void;
  loc: Location;
}

export const useRouter = (): useRouterOutputInterface => {
  const navTo = useNavigate();
  const loc = useLocation();

  const canGoBack = useMemo(() => loc.pathname !== '/', [loc.pathname]);
  const goTo = useCallback((pathname: string) => navTo(pathname), [navTo]);
  const goToCb = useCallback((pathname: string) => () => navTo(pathname), [navTo]);
  const goHome = useCallback(() => navTo('/'), [navTo]);
  const goBack = useCallback(() => navTo(-1), [navTo]);

  return {
    loc,
    canGoBack,
    goTo,
    goToCb,
    goHome,
    goBack,
  };
};
