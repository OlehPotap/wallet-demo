export const getIslogin = ({ auth }) => auth.isLogin;

export const getUser = ({ auth }) => auth.userName;

export const getIsLoading = ({ auth }) => auth.loading;

export const getIsAuthChecking = ({ auth }) => auth.authCheking;

export const checkToken = ({ auth }) => auth.token;
