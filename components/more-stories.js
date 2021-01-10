import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, title, maxCols=2 }) {
  return (
    <section>
      { title &&
        <h2 className="mt-6 mb-4 text-3xl md:text-4xl font-bold tracking-tighter leading-tight font-display mb-2 underline">
          {title}
        </h2>
      }
      <div className={`grid grid-cols-1 md:grid-cols-${maxCols} md:col-gap-8 lg:col-gap-8 row-gap-8`}>
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
