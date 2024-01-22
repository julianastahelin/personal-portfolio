'use client'
import { useEffect, useContext } from 'react'

import { LanguageContext } from '@/components/providers'


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    const { language } = useContext(LanguageContext)

    useEffect(() => {
        console.error(error)
    }, [error])

    const errorMessage = {
        en: 'Something went wrong!',
        pt: 'Algo deu errado!',
    }

    const tryAgain = {
        en: 'Try again',
        pt: 'Tentar novamente',
    }

    return (
        <div className='flex flex-col items-center gap-8'>
            <h2 className='text-center text-3xl font-light md:pb-6'>{errorMessage[language]}</h2>
            <button
                onClick={() => reset()}
                className='
                p-2
                no-underline text-lg font-bold text-secondary-foreground
                border-2 border-secondary-foreground
                bg-primary-foreground
                shadow-medium-dark
                hover:scale-105 hover:ease-in-out hover:duration-200 hover:opacity-70
                '
            >
                {tryAgain[language]}
            </button>
        </div>
    )
}
