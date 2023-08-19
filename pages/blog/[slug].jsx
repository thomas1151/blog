import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import { API } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME, DESCRIPTION } from '../../lib/constants'
import markdownToReact from '../../lib/markdownToReact'
import BasicPage from '../../layouts/basic-page'
import { generateAssetUrl, generateAwsImage } from '../../lib/utils'
import useFormattedDate from '../../hooks/useFormattedDate';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const formattedDate = useFormattedDate(post.date);

    // const [protocolAndHost, setProtocolAndHost] = useState();
    // useEffect(() => {
    //     setProtocolAndHost(window.location.protocol + '//' +global.window.location.host);
    // }, []);
    
  return (
      <BasicPage post={post} router={router} smallHeader={true}>
      <div className="mb-32 max-w-screen-xl">
      <Head>
      <title>{`${post.title} | ${CMS_NAME} | ${DESCRIPTION}`}</title>
      <meta property="og:image" content={`${generateAwsImage({src: generateAssetUrl(post.componentType, post.slug,  post.ogImage.url), width: 1024})}`} />
      <meta property="og:title" content={`${post.title} | ${CMS_NAME}`} />
      <meta property="og:site_name" content={`${CMS_NAME} | ${DESCRIPTION}`}/>
      <meta property="og:description" content={post.summary}/>
      <meta property="og:type" content="article"/>
      </Head>
      <PostBody content={markdownToReact(post.content || '')} contentMeta={<>Published: <strong>{formattedDate}</strong></>} />
      </div>
      </BasicPage>
      
      )
};

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
    'bgColor',
    'borderColor',
    'bgAccentColor',
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
    