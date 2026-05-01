export const productSeoPage = {
  name: "productSeoPage",
  title: "Product SEO Page",
  type: "document",
  fields: [
    { name: "name", title: "Category Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "title", title: "Meta Title", type: "string", validation: (Rule: any) => Rule.required().max(60) },
    { name: "description", title: "Meta Description", type: "text", validation: (Rule: any) => Rule.required().max(160) },
    { name: "h1", title: "H1", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: "keywords", title: "SEO Keywords", type: "array", of: [{ type: "string" }] },
    { name: "products", title: "Products", type: "array", of: [{ type: "string" }] },
    { name: "buyerIntent", title: "Buyer Intent", type: "text" },
    { name: "content", title: "Long-form SEO Content", type: "array", of: [{ type: "text" }] },
    { name: "faqs", title: "FAQs", type: "array", of: [{ type: "object", fields: [{ name: "question", type: "string" }, { name: "answer", type: "text" }] }] }
  ]
};
