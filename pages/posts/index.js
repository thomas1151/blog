import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getExperienceBySlug, getAllExperience, getComponentBodyBySlug } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import GenericCard from '../../components/generic-card'
import MoreStories from '../../components/more-stories'

export default function PostIndex({ posts, content, preview }) {
    const router = useRouter();
    return (
        <Layout preview={preview}>
            <Header {...content} />
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                        <div className="pb-8">
                            <GenericCard showTitle={false} {...content} className={"py-4 my-4"}></GenericCard>
                            {posts.length > 0 && <MoreStories maxCols='3' posts={posts} />}
                        </div>
                    )}
            </Container>

        </Layout>
    )
}

export async function getStaticProps({ params }) {

    return {
        props: {
            posts: getAllPosts(['title', 'content', 'summary', 'image', 'coverImage', 'slug', 'isSquare']),
            content: getComponentBodyBySlug('posts', ['title', 'subtitle', 'content', 'image'])
        }
    }
}
