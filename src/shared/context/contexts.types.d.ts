export interface GlobalContextTypes {
    example?: any,
    setExample?: Dispatch<SetStateAction<boolean>>
}
export interface SessionContextTypes {
    session?: any,
    setSession?: Dispatch<SetStateAction<boolean>>
}
export interface ThemeContextTypes {
    theme?: any,
    toggleTheme?: () => void
}