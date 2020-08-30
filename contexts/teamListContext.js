import React from "react";

const TeamListContext = React.createContext();

const TeamListContextProvider = ({ children }) => {
  const [teamList, setTeamList] = React.useState([]);

  return (
    <TeamListContext.Provider value={[teamList, setTeamList]}>
      {children}
    </TeamListContext.Provider>
  );
};

export {
  TeamListContext,
  TeamListContextProvider
}