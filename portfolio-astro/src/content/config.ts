import {defineCollection, z} from "astro:content"

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        author: z.string().optional(),
        image: z
        .object({
            url: z.string(),
            alt: z.string(),
        })
        .optional(),
        tags: z.array(z.string()).optional(),
    })
})

export const collections = {posts}