import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import PostTitle from '../components/post-title'
import cn from 'classnames'
import { generateAssetUrl } from '../lib/utils'

export default function BasicPage({post, children, sidebar, preview, disableHeaderImage, router, smallHeader }) {
    return (
        <Layout preview={preview}>
            <Header {...post} smallHeader={smallHeader} coverImageUrl={generateAssetUrl(post.componentType, post.slug, post.coverImage)} disableHeaderImage={disableHeaderImage} alwaysShowTitle={true} />
            <Container showToggles={true}>
                {router && router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                        <div className={cn({"flex flex-wrap mb-8": sidebar})}>
                            <article className={cn( "mb-4", {"max-w-screen-xl": !sidebar, "w-full sm:w-2/3":sidebar})}>
                                {children}
                            </article>

                            {sidebar &&
                            
                            <sidebar className="w-full sm:w-1/3 sm:pl-4">
                                {sidebar}
                            </sidebar>
                            }
                        </div>
                    )}
            </Container>

        </Layout>
    )
}