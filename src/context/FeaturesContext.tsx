import { createContext } from "react";
import { features } from "../data";

export const FeaturesContext = createContext({ features });

const FeaturesContextProvider = (props: any) => {
  const contextValue = { features };

  return (
    <FeaturesContext.Provider value={contextValue}>
      {props.children}
    </FeaturesContext.Provider>
  );
};

export default FeaturesContextProvider;
