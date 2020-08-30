import React from "react";

const TeamContext = React.createContext();

const TeamContextProvider = ({ children }) => {
  const [team, setTeam] = React.useState('KT');

  return (
    <TeamContext.Provider value={[team, setTeam]}>
      {children}
    </TeamContext.Provider>
  );
};

export {
  TeamContext,
  TeamContextProvider
}