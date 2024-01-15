import { DocumentTypeNames, allDocuments } from '@/.contentlayer/generated'


export function getSectionData(section: DocumentTypeNames, language: string) {
    return allDocuments.find((document) => document.type === section && document.language === language)
}

export type {
    Abilities,
    About,
    Attributes,
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
