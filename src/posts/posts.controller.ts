import { Controller, Get, Req, Query } from '@nestjs/common';

// 装饰器 posts作为请求的前缀
@Controller('posts')
export class PostsController {
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
  @Get()
  index(@Query('name') name){
      return name
  }
}
