import { motion } from 'framer-motion'


export function AnimatedButton({children}: {children: React.ReactNode}) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}
