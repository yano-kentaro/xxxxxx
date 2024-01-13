import { Module } from '@nestjs/common';

import * as path from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'config/environments/env-validator';
import { PostsModule } from '@/posts/posts.module';

import { AppController } from 'app.controller';
import { AppService } from 'app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      validate
    }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
