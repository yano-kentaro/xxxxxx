import { Module } from '@nestjs/common';
import { PostResolver } from '@/posts/post.resolvers';

@Module({
    providers: [
        PostResolver,
    ],
})
export class PostsModule {}
