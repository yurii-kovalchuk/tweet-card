export const setFollowedToLocalStorage = (data) => {
  return localStorage.setItem("followed", JSON.stringify(data));
};
