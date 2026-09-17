import BlogPostTopBar from "@/components/sections/BlogPostTopBar";
import BlogPostArticle from "@/components/sections/BlogPostArticle";
import BlogPostPromo from "@/components/sections/BlogPostPromo";
import BlogGrid from "@/components/sections/BlogGrid";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export async function generateMetadata() {
  const locale = await getLocale();
  const { blogPost } = await getDictionary();

  return buildMetadata({
    locale,
    title: blogPost.meta.title,
    description: blogPost.meta.description,
    path: "/blog/decreto-10278-digitalizacao",
    keywords: blogPost.meta.keywords,
  });
}

export default async function BlogPostPage() {
  const locale = await getLocale();
  const { blog, blogPost } = await getDictionary();
  const blogHref = withLocale("/blog", locale);

  return (
    <>
      <BlogPostTopBar backHref={blogHref} backLabel={blogPost.topBar.backLabel} search={blog.topBar.search} posts={blog.grid.posts} />
      <BlogPostArticle
        article={blogPost.article}
        backHref={blogHref}
        recentHeading={blog.featured.recentHeading}
        recent={blog.featured.recent}
        newsletter={blogPost.sidebar.newsletter}
      />
      <BlogPostPromo
        heading={blogPost.promo.heading}
        description={blogPost.promo.description}
        image={blogPost.promo.image}
        primaryLabel={blogPost.promo.primaryLabel}
        secondaryLabel={blogPost.promo.secondaryLabel}
      />
      <BlogGrid
        ariaLabel={blog.grid.ariaLabel}
        heading={blog.grid.heading}
        categoriesLabel={blog.grid.categoriesLabel}
        allLabel={blog.grid.allLabel}
        categories={blog.grid.categories}
        comingSoonLabel={blog.grid.comingSoonLabel}
        posts={blog.grid.posts}
      />
    </>
  );
}
