import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToReact from './markdownToReact'

const DATA_SOURCES = {
  POSTS: join(process.cwd(), '_content', 'blog'),
  COMPONENTS: join(process.cwd(), '_content','components'),
  EXPERIENCES: join(process.cwd(),'_content', 'experiences')
}

function getMarkdownFromDirectoryBySlug(slug, directory, componentType, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = { componentType: componentType }

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

function returnRecordsData(type, fields = [], limit = 50) {
  let recordIDs = API.RECORDS[type]();
  let records = [];
  for (let i = 0; i < limit && i < recordIDs.length; i++) {
    records[i] = Object.assign(API.GET[type](recordIDs[i], fields), { componentType: type.toLowerCase() });
  }
  return records
}

export const API = {
  GET: {
    EXPERIENCE: (slug, fields = []) => getMarkdownFromDirectoryBySlug(slug, DATA_SOURCES.EXPERIENCES, "experience", fields),
    COMPONENT: (slug, fields = []) => getMarkdownFromDirectoryBySlug(slug, DATA_SOURCES.COMPONENTS, "componentBody", fields),
    BLOG: (slug, fields = []) => getMarkdownFromDirectoryBySlug(slug, DATA_SOURCES.POSTS, "blog", fields),
  },
  RECORDS: {
    EXPERIENCE: () => fs.readdirSync(DATA_SOURCES.EXPERIENCES),
    COMPONENT: () => fs.readdirSync(DATA_SOURCES.COMPONENTS),
    BLOG: () => fs.readdirSync(DATA_SOURCES.POSTS),
  },
  ALL: {
    EXPERIENCE: (fields = [], limit) => returnRecordsData('EXPERIENCE', fields, limit),
    BLOG: (fields = [], limit) => returnRecordsData('BLOG', fields).sort((post1, post2) => (post1.date > post2.date ? '-1' : '1')).slice(0, limit),
    COMPONENT: async (fields = [], limit = 50) => {
      const slugs = API.RECORDS.COMPONENT()
      const posts = slugs
        .map((slug) => API.GET.COMPONENT(slug, [...fields, 'slug']))
      return Object.assign({}, ...(await Promise.all(posts.map(async (x) => ({ [x.slug]: x })))));
    },
  }
}
