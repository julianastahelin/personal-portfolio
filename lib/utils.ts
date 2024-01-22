import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Language } from '@/components/providers'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function isValidDate(date: Date) {
  return !isNaN(+date)
}

export function convertDateFromIsoToDayMonthYear(isoDate: string, language: Language) {
  var date = new Date(isoDate)
  if (isValidDate(date)) {
    return date.toLocaleDateString(
      language,
      {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }
    )
  }
  return null
}
