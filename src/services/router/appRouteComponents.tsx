import React, { lazy } from 'react';

import { AppRouteNames } from '~services/router/routes';

const MainModule = lazy(() => import('~modules/Main/Main'));
const GameModule = lazy(() => import('~modules/Game/Game'));

export type RouteMap = Record<AppRouteNames, React.ComponentType | React.ReactNode>;

export const appRouteComponents: RouteMap = {
  main: MainModule,
  game: GameModule,
};
