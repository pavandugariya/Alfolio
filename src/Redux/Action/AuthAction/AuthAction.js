export const SplashLoadingHandler = value => {
  return {
    type: 'Splash_Loading',
    payloade: value,
  };
};
export const IsLoginHandler = value => {
  return {
    type: 'IS_LOGIN',
    payloade: value,
  };
};
export const UserTokenHandler = value => {
  return {
    type: 'USER_TOKEN',
    payload: value,
  };
};
