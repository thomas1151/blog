import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { API } from '../../lib/api'
import PostTitle from '../../components/post-title'
import GenericCard from '../../components/generic-card'
import MoreStories from '../../components/more-stories'

export default function ExperienceIndex({ experience, content, preview }) {
    const router = useRouter();
    return (
        <Layout preview={preview}>
            <Header {...content} disableHeaderImage={true} alwaysShowTitle={true} />
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                        <div className="pb-8"> 
                            <GenericCard showTitle={false} {...content} className={"py-4 my-4"}></GenericCard>
                            {experience.length > 0 && <MoreStories maxCols={3} posts={experience} />}
                        </div>
                    )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    return {
        props:{ 
            experience: API.ALL.EXPERIENCE(['title', 'content', 'summary', 'image', 'coverImage', 'slug', 'isSquare']),
            content: API.GET.COMPONENT('experience', ['title', 'subtitle', 'content', 'image', 'bgColor', 'borderColor', 'bgAccentColor'])
        }
    }
}
