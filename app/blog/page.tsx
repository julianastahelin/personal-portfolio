'use client'
import { useContext, useEffect, useState } from 'react'

import { BlogSection } from '@/components/blog'
import { Blog, getBlogPosts, getSectionData, Posts } from '@/lib/data/loader.ts'
import { LanguageContext } from '@/components/providers'


export default function Page() {

    const { language } = useContext(LanguageContext)
    const sectionData = getSectionData('Blog', language) as Blog
    const [posts, setPosts] = useState<Posts>()

    useEffect(() => {
        async function getData() {
            const posts: Posts = await getBlogPosts()
            setPosts(posts)
        }
        getData()
    },[])

    if (posts)
    return (
        <BlogSection sectionData={sectionData} posts={posts} />
    )
}
