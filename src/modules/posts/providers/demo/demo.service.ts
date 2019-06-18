import { Injectable } from '@nestjs/common';
import { Post } from 'src/modules/posts/interfaces/post.interface';

@Injectable()
export class DemoService {
  // 私有的Posts
  private readonly posts: Post[] = [];
  // 获取所有
  findAll(): Post[] {
    return this.posts;
  }
  // 往posts添加数据的方法
  create(post: Post) {
    this.posts.push(post);
  }
}
