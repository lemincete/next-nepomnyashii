import { IPost } from "@/interfaces/post.interface";
import { $api } from "@/helpers/$api";

export class PostServices {
    static async getPosts(search: string): Promise<IPost[]> {

        const { data } = await $api<IPost[]>('/posts', {
            params: {
                q: search
            }
        });

        return data
    }

    static async getPostById(id: string): Promise<IPost> {
        const response = await fetch(`${process.env.API_URL}/posts/${id}`, {
            next: {
                revalidate: 60
            }
        });

        return response.json();
    }
}