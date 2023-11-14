export const userInitialState = {
  isLoggedIn: false,
  userDetails: null,
};

export const combinedInitialState = {
  user: userInitialState,
};

export const stateToBePersisted = ["user"];
