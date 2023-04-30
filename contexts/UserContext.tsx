import { createContext, useContext, useState } from "react";

export interface UserData{
    display_name: string,
    user_name: string,
    profession: string,
    public_email: string,
    description: string,
    nationality: string,
    profile_pic: string,
    facebook: string,
    instagram: string,
    twitter: string,
    linkedin: string,
    github: string,
    isProfileComplete?: true
}

export interface UserContext{
    userData: UserData | null
    setUser: (userData: UserData | null)=> void
}

export interface UserProviderProps{
    children: React.ReactNode
}

const userContext = createContext<UserContext>({
    userData: null,
    setUser: ()=> {}
})

export const useUserContext = () => useContext(userContext)

export const UserProvider = ({children}: UserProviderProps)=>{
    const [userData, setUser] = useState<UserData | null>(null)

    return(
        <userContext.Provider value={{ userData, setUser}}>
            {children}
        </userContext.Provider>
    )
}
