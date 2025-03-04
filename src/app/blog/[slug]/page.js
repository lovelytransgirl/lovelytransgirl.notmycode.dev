import { getAllBlogPosts, getPostBySlug } from '@/utils/blogUtils';
import BlogPostContent from './BlogPostContent';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props) {
  const params = await Promise.resolve(props.params);
  const slug = params?.slug;
  
  if (!slug) return null;

  const post = await getPostBySlug(slug);
  if (!post) return null;

  return <BlogPostContent post={post} />;
} 