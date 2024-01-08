export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Richard Hannagan';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Developer Blog';
  const blogFontHeadings = process.env.BLOG_FONT_HEADINGS
    ? decodeURI(process.env.BLOG_FONT_HEADINGS)
    : 'monospace';
    const blogFontParagraphs = process.env.BLOG_FONT_PARAGRAPHS
    ? decodeURI(process.env.BLOG_FONT_PARAGRAPHS)
    : 'monospace';

  return {
    name,
    blogTitle,
    blogFontHeadings,
    blogFontParagraphs
  };
};
