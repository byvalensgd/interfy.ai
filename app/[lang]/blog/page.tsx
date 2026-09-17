import BlogSearchBar from "@/components/sections/BlogSearchBar";
import BlogTopSearches from "@/components/sections/BlogTopSearches";
import BlogFeatured from "@/components/sections/BlogFeatured";
import BlogCategorySection from "@/components/sections/BlogCategorySection";
import BlogGrid from "@/components/sections/BlogGrid";
import GenericCTA from "@/components/sections/GenericCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export async function generateMetadata() {
  const locale = await getLocale();
  const { blog } = await getDictionary();

  return buildMetadata({
    locale,
    title: blog.meta.title,
    description: blog.meta.description,
    path: "/blog",
    keywords: blog.meta.keywords,
  });
}

export default async function BlogPage() {
  const locale = await getLocale();
  const { blog } = await getDictionary();

  return (
    <>
      <BlogSearchBar title={blog.topBar.title} search={blog.topBar.search} posts={blog.grid.posts} />
      <BlogTopSearches ariaLabel={blog.topSearches.ariaLabel} labels={blog.topSearches.labels} />
      <BlogFeatured
        ariaLabel={blog.featured.ariaLabel}
        heading={blog.featured.heading}
        article={blog.featured.article}
        articleHref={withLocale("/blog/decreto-10278-digitalizacao", locale)}
        recentHeading={blog.featured.recentHeading}
        recent={blog.featured.recent}
      />
      <BlogCategorySection
        ariaLabel={blog.categories.ariaLabel}
        ctaLabel={blog.categories.ctaLabel}
        sections={blog.categories.sections}
        locale={locale}
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
      <GenericCTA
        ariaLabel={blog.cta.ariaLabel}
        heading={blog.cta.heading}
        subheading={blog.cta.subheading}
        primaryLabel={blog.cta.primaryButton}
        primaryHref={withLocale("/test-drive", locale)}
        secondaryLabel={blog.cta.secondaryButton}
        secondaryHref={withLocale("/demo", locale)}
      />
    </>
  );
}
