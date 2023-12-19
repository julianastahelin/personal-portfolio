import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'


// NAV
const Nav = defineDocumentType(() => ({
  name: 'Nav',
  filePathPattern: 'nav/**/*.md',
  fields: {
    language: { type: 'string', required: true },
    title: { type: 'string', required: true },
    home: { type: 'string', required: true },
    cv: { type: 'string', required: true },
    projects: { type: 'string', required: true },
    contact: { type: 'string', required: true },
    lang: { type: 'list', required: true, of: { type: 'string'} },
  }
}))

// HEADER
export const Header = defineDocumentType(() => ({
  name: 'Header',
  filePathPattern: 'header/**/*.md',
  fields: {
    language: { type: 'string', required: true },
    name: { type: 'string', required: true },
    jobTitle: { type: 'string', required: true },
    description: { type: 'string', required: true },
    projectsButton: { type: 'string', required: true },
  }
}))

// CURRICULUM
export const Curriculum = defineDocumentType(() => ({
  name: 'Curriculum',
  filePathPattern: 'curriculum/**/*.md',
  fields: {
    language: { type: 'string', required: true },
    title: { type: 'string', required: true },
    experience: { type: 'nested', required: true, of: Experience },
    education: { type: 'nested', required: true, of: Education },
    courses: { type: 'nested', required: true, of: Courses },
    abilities: { type: 'nested', required: true, of: Abilities },
    languages: { type: 'nested', required: true, of: Languages },
    links: { type: 'nested', required: true, of: Links },
  }
}))

// Experience
const Experience = defineNestedType(() => ({
  name: 'Experience',
  fields: {
    title: { type: 'string', required: true },
    details: { type: 'list', required: true, of: Details },
  }
}))

// Education
const Education = defineNestedType(() => ({
  name: 'Education',
  fields: {
    title: { type: 'string', required: true },
    degrees: { type: 'list', required: true, of: Degree },
  }
}))

const Degree = defineNestedType(() => ({
  name: 'Degree',
  fields: {
    level: { type: 'string', required: true },
    details: { type: 'list', required: true, of: Details },
  }
}))

// Courses
const Courses = defineNestedType(() => ({
  name: 'Courses',
  fields: {
    title: { type: 'string', required: true },
    details: { type: 'list', required: true, of: Details },
  }
}))

const Details = defineDocumentType(() => ({
  name: 'Details',
  fields: {
    name:  { type: 'string', required: true },
    period:  { type: 'string', required: true },
    description: { type: 'list', required: true, of: { type: 'string'} },
  }
}))

// Abilities
const Abilities = defineNestedType(() => ({
  name: 'Abilities',
  fields: {
    title: { type: 'string', required: true },
    list: { type: 'list', required: true, of: AbilityType }
  }
}))

const AbilityType = defineNestedType(() => ({
  name: 'AbilityType',
  fields: {
    sort: { type: 'string', required: true },
    abilities: { type: 'list', required: true, of: { type: 'string'} },
  }
}))

// Languages
const Languages = defineNestedType(() => ({
  name: 'Languages',
  fields: {
    title: { type: 'string', required: true },
    list: { type: 'list', required: true, of: LanguageLevel },
  }
}))

const LanguageLevel = defineNestedType(() => ({
  name: 'LanguageLevel',
  fields: {
    name: { type: 'string', required: true },
    level: { type: 'string', required: true },
  }
}))

// Links
const Links = defineNestedType(() => ({
  title: 'Links',
  fields: {
    title: { type: 'string', required: true },
    list: { type: 'list', required: true, of: Link },
  }
}))

const Link = defineNestedType(() => ({
  title: 'Link',
  fields: {
    name: { type: 'string', required: true },
    url: { type: 'string', required: true },
  }
}))

// PROJECTS
export const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: 'projects/**/*.md',
  fields: {
    language: { type: 'string', required: true },
    title: { type: 'string', required: true },
    projects: { type: 'list', required: true, of: Project },
  }
}))

const Project = defineNestedType(() => ({
  title: 'Project',
  fields: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string', required: true },
    stack: { type: 'nested', required: true, of: Stack },
    description: { type: 'nested', required: true, of: ProjectDescription },
    links: { type: 'nested', required: true, of: Links },
    images: { type: 'nested', required: true, of: Images },
  }
}))

const Stack = defineNestedType(() => ({
  title: 'Stack',
  fields: {
    title: { type: 'string', required: true },
    list: { type: 'list', required: true, of: { type: 'string'} },
  }
}))

const ProjectDescription = defineNestedType(() => ({
  title: 'ProjectDescription',
  fields: {
    title: { type: 'string', required: true },
    text: { type: 'string', required: true },
  }
}))

const Images = defineNestedType(() => ({
  title: 'Images',
  fields: {
    desktop: { type: 'string', required: true },
    tablet: { type: 'string', required: true },
    mobile: { type: 'string', required: true },
  }
}))

// CONTACT
export const Contact = defineDocumentType(() => ({
  name: 'Contact',
  filePathPattern: 'contact/**/*.md',
  fields: {
    language: { type: 'string', required: true },
    title: { type: 'string', required: true },
    contacts: { type: 'list', required: true, of: ContactDetails }, 
  }
}))

const ContactDetails = defineNestedType(() => ({
  title: 'ContactDetails',
  fields: {
    title: { type: 'string', required: true },
    address: { type: 'string', required: true },
  }
}))

// FOOTER
export const Footer = defineDocumentType(() => ({
  name: 'Footer',
  filePathPattern: 'footer/**/*.md',
  fields: {
    language: { type: 'string', required: true },
    credits: { type: 'list', required: true, of: Credits },
  }
}))

const Credits = defineNestedType(() => ({
  title: 'Credits',
  fields: {
    title: { type: 'string', required: true },
    name: { type: 'string', required: true },
    url: { type: 'string', required: true },
  }
}))


export default makeSource({ contentDirPath: 'data', documentTypes: [Nav, Header, Curriculum, Projects, Contact, Footer] })
