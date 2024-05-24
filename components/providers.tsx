'use client'
import { useState, createContext } from 'react'

export type Language = 'pt' | 'en'

interface LanguageContextType {
    language: Language,
    setLanguage: React.Dispatch<React.SetStateAction<Language>>,
}

const defaultLanguage = {
    language: 'pt' as Language,
    setLanguage: () => {},
}

export const LanguageContext = createContext<LanguageContextType>(defaultLanguage)

export function Providers({ children }: React.PropsWithChildren) {
    
    const [ language, setLanguage ] = useState<Language>(defaultLanguage.language)

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
