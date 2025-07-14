export default async function BlogPostPage({ params }) {
    const { blog_id } = await params
    const dd = await params
    console.log(dd)
    return <>
        <div>
            hello {blog_id}
        </div>
    </>
}