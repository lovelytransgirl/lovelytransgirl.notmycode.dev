import { getAllBlogPosts } from '@/utils/blogUtils';
import BlogListClient from './BlogListClient';

export default async function BlogPage() {
  const posts = getAllBlogPosts();
  return <BlogListClient posts={posts} />;
}
