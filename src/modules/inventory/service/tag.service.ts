import { TagRepository } from "../repository/tag.repository";
import { CreateTag } from "../dto/tag.dto";
import { Tag } from "@/generated/prisma";



export class TagService{
    constructor(private TagRepo: TagRepository){}

    async createTag(data: CreateTag): Promise<Tag> {
        const existingTag = await this.TagRepo.findByName(data.tag);
        if(existingTag){
            throw new Error(`Tag '${data.tag}' already exists.`);
        }
        return this.TagRepo.create(data)

    }
    async getAllTags(): Promise<Tag[]> { 
        return this.TagRepo.getAll();  

  }
     async getTagsById(id: number): Promise<Tag> {
        return this.TagRepo.getById(id);  
    }

    async updateTag(id: number, data: { tag: string }): Promise<Tag> {
        const existing = await this.TagRepo.findByName(data.tag);

        if (existing && existing.tag_id !== id) {
            throw new Error(`Tag '${data.tag}' already exists.`);
        }

        return this.TagRepo.updateTag(id, data);
    }   
    
}