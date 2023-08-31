export const routeNames = {
  main: '/',
  game: '/:game',
};

export type AppRouteNames = keyof typeof routeNames;
