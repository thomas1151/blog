import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from './markdownToHtml'

const postsDirectory = join(process.cwd(), '_posts')
const componentsDirectory = join(process.cwd(), '_components')
const experienceDirectory = join(process.cwd(), '_experiences')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}
export function getComponentSlugs() {
  return fs.readdirSync(componentsDirectory)
}
export function getExperienceSlugs() {
  let a = fs.readdirSync(experienceDirectory)
  return a
}
export function getExperienceBySlug(slug, fields = []) {
  return getMarkdownFromDirectoryBySlug(slug, experienceDirectory, "experience", fields)
}
export function getComponentBodyBySlug(slug, fields = []) {
  return getMarkdownFromDirectoryBySlug(slug, componentsDirectory, "componentBody", fields)
}
export function getPostBySlug(slug, fields = []) {
  return getMarkdownFromDirectoryBySlug(slug, postsDirectory, "post", fields)
}
export function getMarkdownFromDirectoryBySlug(slug, directory,  componentType, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = { componentType: componentType}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => Object.assign(getPostBySlug(slug, fields), { componentType: 'post' }))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

export function getAllExperience(fields = []) {
  const slugs = getExperienceSlugs()
  const posts = slugs
    .map((slug) => Object.assign(getExperienceBySlug(slug, fields), { componentType: 'experience' }))
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}


export async function getAllComponents(fields = []) {
  const slugs = getComponentSlugs()
  const posts = slugs
    .map((slug) => getComponentBodyBySlug(slug, [...fields, 'slug']))
  return Object.assign({}, ...(await Promise.all(posts.map(async (x) => ({ [x.slug]: { ...x, 'content': await markdownToHtml(x.content || '') } })))));

  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.priority > post2.priority ? '-1' : '1'))
}
