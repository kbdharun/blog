import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Kbdk Blogs',
  description: 'Welcome to my blog',
  site: import.meta.env.SITE,
  items: import.meta.glob('./posts/**.mdx'),
});