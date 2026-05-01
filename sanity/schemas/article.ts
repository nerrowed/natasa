export const article = {
  name: "article",
  title: "Artikel SEO",
  type: "document",
  fields: [
    { name: "title", title: "Meta Title", type: "string", validation: (Rule: any) => Rule.required().max(60) },
    { name: "description", title: "Meta Description", type: "text", validation: (Rule: any) => Rule.required().max(160) },
    { name: "h1", title: "H1", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "h1", maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: "keywords", title: "SEO Keywords", type: "array", of: [{ type: "string" }] },
    { name: "intro", title: "Intro", type: "text", validation: (Rule: any) => Rule.required() },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", title: "Heading", type: "string", validation: (Rule: any) => Rule.required() },
            { name: "body", title: "Paragraphs", type: "array", of: [{ type: "text" }], validation: (Rule: any) => Rule.required() }
          ]
        }
      ]
    },
    { name: "publishedAt", title: "Published At", type: "datetime" }
  ]
};
