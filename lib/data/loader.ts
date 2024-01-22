import { DocumentTypeNames, allDocuments } from '@/.contentlayer/generated'


export function getSectionData(section: DocumentTypeNames, language: string) {
    return allDocuments.find((document) => document.type === section && document.language === language)
}

export type {
    Abilities,
    About,
    Attributes,
    Blog,
    Contact,
    Courses,
    Curriculum,
    Education,
    Experience,
    Home,
    Languages,
    Nav,
    Projects,
    Project,
    TechStack,
} from '@/.contentlayer/generated'

export interface Post {
    cover_image: string,
    published_at: string,
    reading_time_minutes: number,
    url: string,
    title: string,
    description: string,
}

export type Posts = Post[]

export async function getBlogPosts() {
    try {
        const res = await fetch('https://dev.to/api/articles?username=julianastahelin')
        return await res.json()
    } catch (error) {
        return error
    }
}
