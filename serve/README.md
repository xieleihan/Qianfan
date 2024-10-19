# Qianfan

![Qianfan](https://socialify.git.ci/xieleihan/Qianfan/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F57227318%3Fv%3D4&name=1&owner=1&pattern=Floating%20Cogs&pulls=1&stargazers=1&theme=Auto)

## 接口文档

> 作者:@SouthAki
>
> 开源协议:`GPL-3.0`
>
> 任何人无论任何理由使用该文档,均无需征求我授权.

### 使用前须知

> 请到`db/database`文件下,修改你本地的数据库的信息
>
> 接口已经全部允许跨域访问

### 公有接口

#### 测试接口

> 接口地址:`http://localhost:9008/`
>
> 方法:`GET`
>
> 返回示例:`Hello world`

#### 使用代理去访问没有跨域

> 接口地址:`http://localhost:9008/proxy`
>
> 方法: `GET`
>
> 参数:`url`

#### 服务器IP信息

> 接口地址: `http://localhost:9008/proxyip`
>
> 方法: `GET`
>
> 返回示例:
>
> ```json
> {
>     "code": 200,
>     "data": {
>         "ret": "ok",
>         "data": {
>             "ip": "58.62.79.253",
>             "location": [
>                 "中国",
>                 "广东",
>                 "广州",
>                 "",
>                 "电信"
>             ]
>         }
>     }
> }
> ```

#### 生成随机图片验证码

> 接口地址: `http://localhost:9008/getinfo`
>
> 方法:`GET`
>
> 返回一个`SVG图片`信息

#### 验证随机图片验证码

> 接口地址: `http://localhost:9008/getVerInfo`
>
> 方法:`GET`
>
> 参数:`code`

#### 发送邮箱验证码接口

> 接口地址:`http://localhost:9008/public/sendemail`
>
> 方法:`GET`
>
> 参数:`email`

#### 验证邮箱验证码接口

> 接口地址:`http://localhost:9008/public/verify`
>
> 方法:`GET`
>
> 参数:`email`,`email_code`

#### 百度AI千帆模型

> 接口地址: `http://localhost:9008/public/baiduai`
>
> 方法:`GET`
>
> 参数列表:`message`,`username`,`usertoken`
>
>  实现的功能:
>
> - [x] 在发送信息前,做用户的鉴权
> - [x] 在发送信息的时候,检查用户的信息是否为空

#### 用户注册和登录

> ##### 注册
>
> > 接口地址: `http://localhost:9008/public/register`
> >
> > 方法:`POST`
> >
> > 参数:`username`,`useremail`,`userpassword`,`email_code`
> >
> > 步骤: 前端需要先调用上面的邮箱发送接口,发送邮箱验证码,把验证码随着`email_code`参数传递,才可以继续注册流程
> >
> > 实现的功能:
> >
> > - [x] 验证邮箱是否真实有效
> > - [x] 检查用户名是否存在
> > - [x] 检查邮箱是否存在
> > - [x] 密码的加密处理
>
> ##### 登录
>
> > 接口地址: `http://localhost:9008/public/login`
> >
> > 方法:`POST`
> >
> > 参数: `username`,`userpassword`
> >
> > 返回参数:
> >
> > 携带一个`token`,请在前端部分存进`cookie`或者`sessionStrong`,后续在使用AI模型会用到

#### 用户头像更新

> 接口地址:`http://localhost:9008/public/updateUserAvatar`
>
> 方法:`POST`
>
> 参数:`username`,`useravater`,`usertoken`

#### 用户名更新

> 接口地址:`http://localhost:9008/public/updateUsername`
>
> 方法:`GET`
>
> 参数:`oldUsername`,`usertoken`,`newUsername`

#### 用户注销接口

> 接口地址:`http://localhost:9008/public/deleteUser`
>
> 方法:`GET`
>
> 参数:`username`,`usertoken`

### 私有接口

#### 超级管理员

> ##### 注册(一次性)
>
> > 接口地址:`http:localhost:9008/private/adminregister`
> >
> > 方法:`POST`
> >
> > 参数:`adminusername`,`adminuseremail`,`adminuserpassword`
> >
> > 会生成一个`token`,给后续管理员操作某些敏感操作的时候做个鉴权
>
> ##### 登录
>
> > 接口地址:`http://localhost:9008/private/adminlogin`
> >
> > 方法:`POST`
> >
> > 参数:`adminusername`,`adminuserpassword`