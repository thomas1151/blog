import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getExperienceBySlug, getAllExperience, API } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToReact from '../../lib/markdownToReact'
import BasicPage from '../../layouts/basic-page'
import GenericCard from '../../components/generic-card'
import { generateAssetUrl } from '../../lib/utils'

export default function Experience({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    const sidebar = <GenericCard image={generateAssetUrl(post.componentType, post.slug, post.coverImage)}/>
    return (
        <BasicPage post={post} router={router} sidebar={sidebar} disableHeaderImage={true} alwaysShowTitle={true} >
            <Head>
                <title>
                    {post.title} | {CMS_NAME}
                </title>
                <meta property="og:image" content={post.slug} />
            </Head>
            <PostBody content={markdownToReact(post.content || '')} />
        </BasicPage>
    
    )
}

export async function getStaticProps({ params }) {
    const post = API.GET.EXPERIENCE(params.slug, [
        'title',
        'subtitle',
        'summary',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'bgColor',
        'borderColor',
        'bgAccentColor',
        'componentType'
    ])
    //const content = await markdownToReact(post.content || '')

    return {
        props: {
            post: {
                ...post,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = API.ALL.EXPERIENCE(['slug'])

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
