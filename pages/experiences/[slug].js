import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getExperienceBySlug, getAllExperience } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import BasicPage from '../../layouts/basic-page'
import GenericCard from '../../components/generic-card'
import { generateAssetUrl } from '../../lib/utils'

export default function Experience({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    post.bgColor = post.color

    const sidebar = <GenericCard image={generateAssetUrl(post.componentType, post.slug, post.coverImage)}/>
    return (
        <BasicPage post={post} router={router} sidebar={sidebar}>
            <Head>
                <title>
                    {post.title} | {CMS_NAME}
                </title>
                <meta property="og:image" content={post.slug} />
            </Head>
            <PostBody content={post.content} />
        </BasicPage>
    
    )
}

export async function getStaticProps({ params }) {
    const post = getExperienceBySlug(params.slug, [
        'title',
        'subtitle',
        'summary',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'color',
        'componentType'
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllExperience(['slug'])

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
