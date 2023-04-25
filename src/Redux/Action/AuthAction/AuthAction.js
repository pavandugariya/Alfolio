export const _splashLoadingHandler = value => {
  return {
    type: 'SPLASH_LOADING',
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
