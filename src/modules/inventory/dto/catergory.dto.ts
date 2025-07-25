import {z } from 'zod';



export const CreateCategoryDto = z.object({
    category: z.string().min(1, { message: 'Category name is required' })
});

export const UseCategoryDto = z.object({
    category: z.string().min(1, { message: 'Category name is required' })
});

export type CreateCategory = z.infer<typeof CreateCategoryDto>; 

export type UseCategory = z.infer<typeof UseCategoryDto>;   