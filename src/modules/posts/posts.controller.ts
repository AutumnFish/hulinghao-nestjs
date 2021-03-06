import {
  Controller,
  Get,
  Req,
  Query,
  Headers,
  Post,
  Param,
  Body,
  HttpException,
  HttpStatus,
  ForbiddenException,
  UseFilters,
} from '@nestjs/common';
// 导入dto
import { CreatePostDto } from './posts.dto';
// 导入service
import { DemoService } from './providers/demo/demo.service';
import { DemoFilter } from 'src/core/filters/demo.filter';

// 装饰器 posts作为请求的前缀
@Controller('posts')
// @UseFilters(DemoFilter)
export class PostsController {
  // 构造方法
  constructor(private readonly demoService: DemoService) {
  }

  // 返回service中的所有数据
  @Get()
  index() {
    return this.demoService.findAll();
  }
  // 使用Dto限制数据的类歘
  @Post()
  // @UseFilters(DemoFilter)
  store(@Body() post: CreatePostDto) {
    // 添加数据
    // this.demoService.create(post )
    // 制造一个异常
    // throw new HttpException('没有权限',HttpStatus.FORBIDDEN)
    // 直接抛出一个权限异常
    throw new ForbiddenException('没有权限哦！！！')

  }

  // 基本使用01
  // 装饰器
  // @Get()
  // // 被装饰的方法
  // index(){
  //     // 请求的返回值 字符串支持
  //     // return '牛逼'
  //     // 返回对象或者数组会被自动转化为JSON
  //     return {
  //         name:'jack',
  //         age:18,
  //         friend:[
  //             {
  //                 name:'rose',
  //                 skill:'不怕冷'
  //             }
  //         ]
  //     }
  // }
  // 获取请求的信息
  //   @Get()
  //   index(@Req() req) {
  //     const { hostname, url, method,ip } = req;
  //     return {
  //       hostname,
  //       url,
  //       method,
  //       ip
  //     };
  //   }

  // 获取Get请求的所有参数
  //   @Get()
  //   index(@Query() query){
  //       return query
  //   }

  // 获取Get请求的指定参数
  //   @Get()
  //   index(@Query('name') name){
  //       return name
  //   }

  // 获取请求头中的参数
  //   @Get()
  //   index(@Headers() headers) {
  //     return headers;
  //   }

  // 获取请求头中的指定参数
  //   @Get()
  //   index(@Headers('host') host) {
  //     return host;
  //   }

  // 获取Post请求数据 url中 类似于这样 /posts/10
  //   @Post(':id')
  //   index(@Param() param) {
  //     return param;
  //   }

  // 获取Post请求主体中的数据
  //   @Post()
  //   index(@Body() body) {
  //     return body;
  //   }

  // 使用Dto限制数据的类歘
  // @Post()
  // index(@Body() post: CreatePostDto) {
  //   return post.title;
  // }
}
