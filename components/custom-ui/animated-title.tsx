import { motion } from 'framer-motion'


export function AnimatedTitle({ children }: { children: React.ReactNode }) {
    return (
        <motion.h2
            className='text-center text-3xl font-light md:pb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.h2>
    )
}
