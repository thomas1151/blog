import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getAllComponents, getAllExperience } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import GenericCard from '../components/generic-card'

export default function Index({posts, components, experience}) {

  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
          <Intro {...components.hero} />
        <Container className="relative">
          {/* <div className="w-1/2 border-r-8 border-primary absolute h-full z-0 ml-1"></div> */}
          <div className="z-10 relative pt-4">
          {heroPost && (
            <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            summary={heroPost.summary}
            componentType={heroPost.componentType}
            />
            )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} title="Other Ramblings" />}
          </div>

          <div className="pb-8">
            <GenericCard {...components.experience} className={"py-4 my-4"}></GenericCard>
            {experience.length > 0 && <MoreStories maxCols='3' posts={experience} />}
          </div>

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'summary',
  ])

  const components = await getAllComponents(['title', 'content', 'image'])
  const experience = await getAllExperience(['title', 'content', 'summary', 'image', 'coverImage', 'slug', 'isSquare'])
  console.log(experience)
  return {
    props: { posts: allPosts, components: components, experience: experience },
  }
}
