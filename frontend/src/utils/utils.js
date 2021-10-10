
const getUserFromLocalStorage = (user) => localStorage.getItem(user)
export const getUser = (user)=>JSON.parse(getUserFromLocalStorage(user))[user]


