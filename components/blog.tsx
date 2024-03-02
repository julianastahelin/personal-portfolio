import { BookText } from 'lucide-react'
import { motion } from 'framer-motion'

import { Blog, Post, Posts } from '@/lib/data/loader.ts'
import { convertDateFromIsoToDayMonthYear } from '@/lib/utils'
import { AnimatedButton, AnimatedTitle } from '@/components/custom-ui'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Language } from '@/components/providers'


export function BlogSection({ sectionData, posts }: { sectionData: Blog, posts: Posts }) {

    const { language } = sectionData
    const coverImageTemplate = '/assets/img/dev.to-cover-template.png'

    return (
        <section className='flex flex-col items-center gap-10 w-4/5 max-w-7xl'>
            <AnimatedTitle>
                {sectionData.sectionTitle}
            </AnimatedTitle>
            <ul className='flex flex-wrap gap-6 w-full justify-center'>
                {posts.map((post, index) => (
                    <motion.div
                        className='shadow-small-dark' key={index + language}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index / 5 }}
                        viewport={{ once: true }}
                    >
                        <Card className='flex flex-col max-w-xs rounded-none border-2 border-accent-quarternary bg-primary w-full h-full'>
                            <CardHeader className='px-0 pt-0'>
                                <img src={post.cover_image ? post.cover_image : coverImageTemplate} alt='Cover image of blog post' className='min-h-[8.37rem]' />
                            </CardHeader>
                            <div className='flex flex-col flex-grow justify-between'>
                                <CardInfo post={post} language={language as Language} />
                                <CardFooter className='self-end'>
                                    <AnimatedButton>
                                        <a href={post.url} target='_blank'
                                            className='
                                            p-2
                                            no-underline text-lg font-bold text-secondary-foreground
                                            border-2 border-secondary-foreground
                                            bg-accent-quarternary
                                            shadow-medium-dark
                                            hover:scale-105 hover:ease-in-out hover:duration-200 hover:opacity-70
                                            '
                                        >
                                            {sectionData.readButton}
                                        </a>
                                    </AnimatedButton>
                                </CardFooter>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </ul>
        </section>
    )
}


function CardInfo({ post, language }: { post: Post, language: Language }) {
    
    return (
        <CardContent className='flex flex-col gap-2 min-h-[13rem]'>
            <CardDescription className='flex w-full justify-between text-primary-foreground'>
                {convertDateFromIsoToDayMonthYear(post.published_at, language as Language)}
                <span className='font-light'>
                    {post.reading_time_minutes} min {' '}
                    <BookText className='inline' size={14} strokeWidth={1} />
                </span>
            </CardDescription>
            <CardTitle className='text-primary-foreground'>
                <a href={post.url} target='_blank'>
                    {post.title}
                </a>
            </CardTitle>
            <CardDescription className='text-primary-foreground'>
                {post.description}
            </CardDescription>
        </CardContent>
    )
}
