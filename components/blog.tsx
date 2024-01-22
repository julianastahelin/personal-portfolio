import { BookText } from 'lucide-react'

import { Blog, Post, Posts } from '@/lib/data/loader.ts'
import { convertDateFromIsoToDayMonthYear } from '@/lib/utils'
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
            <h2 className='text-center text-3xl font-light md:pb-6'>
                {sectionData.sectionTitle}
            </h2>
            <ul className='flex flex-wrap gap-6 w-full justify-center'>
                {posts.map((post, index) => (
                    <div className='shadow-small-dark' key={index}>
                        <Card className='flex flex-col max-w-xs rounded-none border-2 border-accent-quarternary bg-primary w-full h-full'>
                            <CardHeader className='px-0 pt-0'>
                                <img src={post.cover_image ? post.cover_image : coverImageTemplate} alt='Cover image of blog post' className='min-h-[8.37rem]' />
                            </CardHeader>
                            <div className='flex flex-col flex-grow justify-between'>
                                <CardInfo post={post} language={language as Language} />
                                <CardFooter className='self-end'>
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
                                </CardFooter>
                            </div>
                        </Card>
                    </div>
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
