import { useRouter } from 'next/router'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { API } from '../../lib/api'
import PostTitle from '../../components/post-title'
import GenericCard from '../../components/generic-card'
import MoreStories from '../../components/more-stories'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { CMS_NAME, DESCRIPTION, HOME_OG_IMAGE_URL } from '../../lib/constants'

export default function PostIndex({ posts, content, preview }) {
    const router = useRouter();

    const [protocolAndHost, setProtocolAndHost] = useState();
    useEffect(() => {
        setProtocolAndHost(window.location.protocol + '//' +global.window.location.host);
    }, []);

    return (
        <Layout preview={preview}>
            <Head>
                <title>{`${content.title} | ${CMS_NAME} | ${DESCRIPTION}`}</title>
                <meta property="og:title" content={`${content.title} | ${CMS_NAME}`} />
                <meta property="og:site_name" content={`${CMS_NAME} | ${DESCRIPTION}`}/>
                <meta property="og:description" content={content.summary}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={protocolAndHost+HOME_OG_IMAGE_URL}></meta>
            </Head>
            <Header {...content} alwaysShowTitle={true} />
            <Container className="px-4">
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                        <div className="pb-8">
                            <GenericCard showTitle={false} {...content} className={"py-4 my-4"}></GenericCard>
                            {posts.length > 0 && <MoreStories  maxCols={3} posts={posts} />}
                        </div>
                    )}
            </Container>

        </Layout>
    )
}

export async function getStaticProps({ params }) {

    return {
        props: {
            posts: API.ALL.BLOG(['title', 'content', 'summary', 'image', 'coverImage', 'slug', 'isSquare', 'date']),
            content: API.GET.COMPONENT('posts', ['title', 'subtitle', 'content', 'image', 'bgColor', 'borderColor', 'bgAccentColor'])
        }
    }
}
