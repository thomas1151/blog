import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import { API } from '../../lib/api'
import Head from 'next/head'
import markdownToReact from '../../lib/markdownToReact'
import BasicPage from '../../layouts/basic-page'
import GenericCard from '../../components/generic-card'
import { generateAssetUrl, generateAwsImage} from '../../lib/utils'
import { CMS_NAME, DESCRIPTION } from '../../lib/constants'

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
                    {`${post.title} | ${CMS_NAME} | ${DESCRIPTION}`}
                </title>
                <meta property="og:title" content={`${post.title} | ${CMS_NAME}`} />
                <meta property="og:site_name" content={`${CMS_NAME} | ${DESCRIPTION}`}/>
                <meta property="og:description" content={post.summary}/>
                <meta property="og:type" content="article"/>
                <meta property="og:image" content={`${generateAwsImage({src: generateAssetUrl(post.componentType, post.slug,  post.coverImage), width: 1024})}`} />
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
