export const brandPage = {
  name: "brandPage",
  title: "Brand SEO Page",
  type: "document",
  fields: [
    { name: "name", title: "Brand Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "title", title: "Meta Title", type: "string", validation: (Rule: any) => Rule.required().max(60) },
    { name: "description", title: "Meta Description", type: "text", validation: (Rule: any) => Rule.required().max(160) },
    { name: "h1", title: "H1", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: "keywords", title: "SEO Keywords", type: "array", of: [{ type: "string" }] },
    { name: "categories", title: "Product Categories", type: "array", of: [{ type: "string" }] },
    { name: "intro", title: "Unique Brand Description Paragraphs", type: "array", of: [{ type: "text" }], validation: (Rule: any) => Rule.required() },
    { name: "buyingTips", title: "Buying Tips", type: "array", of: [{ type: "string" }] }
  ]
};
