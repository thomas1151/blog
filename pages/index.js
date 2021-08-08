import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { API } from '../lib/api'
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
            <title>Thomas Barratt</title>
          </Head>
              <Intro {...components.hero} />
          <Container className="px-4 relative" showToggles>
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
            </div>

            <GenericCard {...components.experience} className="py-4 my-4" moreUrl='/experience'></GenericCard>
            {experience.length > 0 && <MoreStories maxCols={3} posts={experience} />}

            <div className="pb-8">
              {morePosts.length > 0 && <MoreStories posts={morePosts} title="Other Ramblings" moreUrl='/blog' />}
            </div>

          </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = API.ALL.BLOG([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'summary',
  ], 3)
  
  const components = await API.ALL.COMPONENT(['title', 'content', 'image'])
  const experience = await API.ALL.EXPERIENCE(['title', 'content', 'summary', 'image', 'coverImage', 'slug', 'isSquare'], 3)
  return {
    props: { posts: allPosts, components: components, experience: experience },
  }
}
