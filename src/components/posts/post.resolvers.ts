import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from '@/posts/interfaces/post.model';

@Resolver((of) => PostModel)
export class PostResolver {
    constructor() {}

    // postsクエリを受け取ったら、PostModelの配列を返す
    @Query(() => [PostModel], {name: 'posts', nullable: true})
    async getPosts() {
        return [
            {
                id: '1',
                title: 'NestJS is so good.',
            },
            {
                id: '2',
                title: 'GraphQL is so good.',
            },
        ];
    }
}