import { DocumentTypeNames, allDocuments } from '@/.contentlayer/generated'


export function getSectionData(section: DocumentTypeNames, language: string) {
    return allDocuments.find((document) => document.type === section && document.language === language)
}

export type {
    Abilities,
    About,
    Contact,
    Courses,
    Curriculum,
    Education,
    Experience,
    Footer,
    Home,
    Languages,
    Nav,
    Projects,
    Project,
    TechStack,
} from '@/.contentlayer/generated'
