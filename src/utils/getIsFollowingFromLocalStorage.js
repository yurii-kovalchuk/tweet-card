import { getFollowedFromLocalStorage } from "./getFollowedFromLocalStorage";

export const getIsFollowingFromLocalStorage = (id) => {
  const followedFromLocalStorage = getFollowedFromLocalStorage();
  return followedFromLocalStorage.find((userId) => userId === id);
};
