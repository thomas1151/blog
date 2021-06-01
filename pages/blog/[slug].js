import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import { API } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToReact from '../../lib/markdownToReact'
import BasicPage from '../../layouts/basic-page'

export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <BasicPage post={post} router={router} smallHeader={true}>
            <div className="mb-32 max-w-screen-xl">
                <Head>
                    <title>
                        {post.title} | {CMS_NAME}
                    </title>
                    <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostBody content={markdownToReact(post.content || '')} contentMeta={<>Published: <strong>{new Date(post.date).toLocaleDateString()}</strong></>} />
            </div>
        </BasicPage>

    )
}

export async function getStaticProps({ params }) {
    const post = API.GET.BLOG(params.slug, [
        'title',
        'subtitle',
        'summary',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'color'
    ])
    // const content = await markdownToReact(post.content || '')

    return {
        props: {
            post: {
                ...post,
                //content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = API.ALL.BLOG(['slug']);
    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
