export const getFollowedFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("followed")) || [];
};
