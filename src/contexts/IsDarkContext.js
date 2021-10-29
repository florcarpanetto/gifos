import { createContext, useState } from "react/cjs/react.development";


export const IsDarkContext = createContext(false);

export default function IsDarkProvider({children}) {
    const [isDark, setIsDark] = useState(false);
    return (
    <IsDarkContext.Provider value={{isDark, setIsDark}}>  
        {children}
    </IsDarkContext.Provider>
    )
}
