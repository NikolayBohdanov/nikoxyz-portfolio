import fs from 'fs'
import path from 'path'
import { CategorySlug, isCategorySlug } from './categories'

export { formatDate } from './format'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  category?: CategorySlug
}

function parseFrontmatter(fileContent: string, fileName?: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')
    const trimmedKey = key.trim()

    if (trimmedKey === 'category') {
      if (isCategorySlug(value)) {
        metadata.category = value
      } else if (value) {
        console.warn(
          `[blog] Unknown category "${value}" in ${fileName ?? 'post'} -- expected one of: ai-agents, crypto-defi, personal`
        )
      }
      return
    }

    if (
      trimmedKey === 'title' ||
      trimmedKey === 'publishedAt' ||
      trimmedKey === 'summary' ||
      trimmedKey === 'image'
    ) {
      metadata[trimmedKey] = value
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent, path.basename(filePath))
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}
