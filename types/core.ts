import { MutableRefObject } from 'react'

export type Language = 'pt' | 'en'

export interface MutableRef extends MutableRefObject<null | HTMLDivElement | HTMLHeadingElement> {}

export interface FadeIn {
    opacity: number,
    transition?: string,
}

export interface SectionProps {
    language: Language,
    fadeIn: FadeIn,
}
