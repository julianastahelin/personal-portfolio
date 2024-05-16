'use client'
import { useEffect, useState } from 'react'

import { BlogSection } from '@/components/blog'
import { Blog, getBlogPosts, getSectionData, Posts } from '@/lib/data/loader.ts'


interface PageProps {
    params: {
        lang: string
    }
}

export default function Page({ params: { lang } }: PageProps) {

    const sectionData = getSectionData('Blog', lang) as Blog
    const [posts, setPosts] = useState<Posts>()

    useEffect(() => {
        async function getData() {
            const posts: Posts = await getBlogPosts()
            setPosts(posts)
        }
        getData()
    }, [])

    if (posts)
        return (
            <BlogSection sectionData={sectionData} posts={posts} />
        )
}
