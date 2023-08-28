import { IPost } from "@/interfaces/post.interface";

export class PostServices {
    static async getPosts(search: string): Promise<IPost[]> {
        const searchParams = search ? `q=${search}` : ''

        const response = await fetch(`${process.env.API_URL}/posts/?${searchParams}`);

        return response.json();
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