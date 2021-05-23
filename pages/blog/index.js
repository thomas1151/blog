import { useRouter } from 'next/router'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { API } from '../../lib/api'
import PostTitle from '../../components/post-title'
import GenericCard from '../../components/generic-card'
import MoreStories from '../../components/more-stories'

export default function PostIndex({ posts, content, preview }) {
    const router = useRouter();
    return (
        <Layout preview={preview}>
            <Header {...content} alwaysShowTitle={true} />
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
            posts: API.ALL.BLOG(['title', 'content', 'summary', 'image', 'coverImage', 'slug', 'isSquare']),
            content: API.GET.COMPONENT('posts', ['title', 'subtitle', 'content', 'image', 'bgColor', 'accentColor'])
        }
    }
}
