import{ z }from 'zod'


export const CreateTagDto = z.object({
    tag: z.string()
})




export const UseTagDto = z.object({
    tag: z.string()
})

export type CreateTag = z.infer<typeof CreateTagDto>;
export type UseTag = z.infer<typeof UseTagDto>;

