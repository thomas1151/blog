import PostPreview from '../components/post-preview'
import SectionTitle from './sectionTitle';

export default function MoreStories({ posts, title, maxCols=2, moreUrl }) {
  return (
    <section>
      { title && <SectionTitle title={title} moreUrl={moreUrl} /> }
      <div className={`grid grid-cols-1 md:grid-cols-${maxCols} gap-x-2 md:gap-x-4 lg:gap-x-8 gap-y-8`}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            summary={post.summary}
            componentType={post.componentType}
            isSquare={post.isSquare}
          />
        ))}
      </div>
    </section>
  )
}
