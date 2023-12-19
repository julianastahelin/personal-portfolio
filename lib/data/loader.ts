import { DocumentTypeNames, allDocuments } from '@/.contentlayer/generated'


export function getSectionData(section: DocumentTypeNames, language: string) {
    return allDocuments.find((document) => document.type === section && document.language === language)
}
