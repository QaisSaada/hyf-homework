import react from "react";

const UserContext = react.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserConsumer, UserProvider, UserContext };