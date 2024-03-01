'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'


export function CustomToaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} className='bg-primary-foreground text-tertiary-foreground p-4 border-2 border-border-tertiary shadow-small-dark' duration={2000} {...props}>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className='text-tertiary-foreground hover:text-accent-primary'/>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
