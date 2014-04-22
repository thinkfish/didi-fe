*写在前面*
>关于svn、开发环境、测试环境、线上路径、访问路径、域名之间的对应关系进行记录，希望Team内同学对这些路径熟记于心，在工作中能够快速找到对应的资源以提高效率。

###MVC模式
*写这段的目的是帮助大家更好的理解前后台是怎么协调的*

1. MVC开发模式－－M（Model）C（Controller）V（View）。
2. 两个分离－－数据M和行为C分离，行为C和表现V分离，V就是FE的一亩三分地。
3. MVC跟传统的asp、jsp、php最大的不同就在于，以往用户请求都是直接请求一个文件，而MVC请求的是action，action是Controller中的方法比如我们访问`http://test.diditaxi.com.cn/api/v2/weixinapi` `weixinapi`就是一个Controller对应着controllers文件夹下的`weixinapi.php`。
4. `weixinapi.php`里面有一个`function index`，index方法就是Controller的默认方法，这个index内部需要load->(home.html)，执行完load方法后，正常情况下就response了`home.html`
5. `home.html`里面如`/static/webapp/didi.min.js`等代码，浏览器会再次发起请求，这个时候就是请求**静态资源**了如`http://test.diditaxi.com.cn/static/webapp/didi.min.js`这些资源在静态目录下的`/static/...`下

*PS：想了解更详细的细节请再沟通*

###113服务器
- `xiaoju@113.11.197.199 端口22 密码请找相关的人取`  
- 静态路径：`/home/xiaoju/webroot/` 可以建立自己的静态路径如jb    
- 访问路径：http://113.11.197.199/jb/example.html    
- 项目路径：`/home/xiaoju/app/api/v2`v2下面有models，controllers，views就是MVC。    
- 访问路径：`http://113.11.197.199/api/v2/weixinapi`


###118服务器--曾经的218

- `xiaoju@118.244.193.242 端口22 密码请找相关的人取`这个IP绑定的域名是`http://test.diditaxi.com.cn`    
- 静态路径：/home/xiaoju/developers/ 可以建立自己的静态路径如jb      
- 访问路径：http://test.diditaxi.com.cn/jb/example.html       
- 项目路径：`/home/xiaoju/developers/hongbao/api/v2`这个hongbao被重定向到了api/v2/也就是说http://test.diditaxi.com.cn/hongbao/api/v2/weixinapi跟http://test.diditaxi.com.cn/api/v2/

##vpn
1. 先找OP申请vpn，然后登录`http://vpn.xiaojukeji.com:8000`上面有使用说明以及需要的证书软件  
2. vpn的作用是让我们在家里也能通过`svn://10.10.10.60/xiaoju/server`来访问svn服务。

##svn路径
1. 安装好vpn方便我们随时随地的使用svn，当然在`937wifi`或者`113，218服务器`上开发时使用`svn://118.244.193.172/xiaoju/server/`就不需要了vpn了。
2. 前端同学svn中的路径有4个
    - `svn://10.10.10.60/xiaoju/server/static/` 静态资源目录，跟线上一致
    - `svn://10.10.10.60/xiaoju/server/share/` 运营活动相关的静态页面，跟线上一致
    - `svn://10.10.10.60/xiaoju/server/frontend/` 前端同学特有的路径，用来做前端知识积累使用，跟具体项目无关 
    - 其他的具体项目比如微信的主干`svn://10.10.10.60/xiaoju/server/api/v2/trunk/views/webapp`已被废弃
*注意:除share文件夹之外，不允许对任何主干的代码直接ci*

##线上路径和访问路径
1. static目录在线上的位置为/home/webroot/webroot/static/
2. share目录在线上的位置为/home/webroot/webroot/share/
3. 项目路径/home/webroot/app/api/v2/views/...
4. 访问域名
    - http://diditaxi.com.cn/static/webapp/didi.min.js －－对外看不到url的路径
    - http://diditaxi.qq.com/static/webapp/didi.min.js －－腾讯的二级域名
    - http://pay.xiaojukeji.com/static/webapp/didi.min.js －－对外能看到url时使用。


###118北京机房--不常用
通过vpn在家办公时候应该是` ssh liujiangbei@10.10.10.60 -p 1025` 登录 `web01 ssh web01.jx `

##tencent token
*登录线上机器的时候需要使用！！！*

1. 运帷＝》联通
2. 姓名：p_jbjbliu
3. ping：此处省略若干字
4. outlook密码：此处省略若干字
5. SSH：teg2.mnet.com Port：36000
6. token：实时现取
7. ssh rd@10.231.145.240
8. 线上密码--此处省略若干字
9. ssh web01.qq --进入web01服务
10. scp -P22 -r --运程copy文件

##Linux常用命令（不断更新）
- cd -- change directory
- mkdir -- make directory
- cp -- copy files and direcotry
- mv -- mv files and directory
- scp -- 远程copy
- md5sum -- 将文件生成md5串来比对文件
- vimdiff -- vim比对文件
- diff -- 比对文件
- ls -- 查看文件列表
- ll -- 查看文件列表

##svn常用命令（不断更新）
- `svn co svn://10.10.10.60/api/v2/branches/f-dianping-webapp`－－签出
- `svn ci filename -m "ci mark you must to write"`－－提交或签入
- `svn up`－－更新
- `svn add filename`－－添加文件到本地svn库中
- `svn diff -r 12344:12345 [-R vim]`－－比较两个不同的版本
- `svn merge ^/server/api/v2/trunk`－－合并主干到分支
- `svn resolve config/xx.php --accept=working`－－解决冲突的时候选择工作目录下的文件
- `svn resolved home.html`－－手动合并完代码后告诉svn冲突解决了
- `svn merge ^/server/api/v2/branches/f-weixin-webapp1.1`－－合并分支
- `svn revert -R .`－－取消合并整个目录
- `svn revert filename`－－取消合并某个文件
- `svn cleanup`－－解锁
- `vimdiff解决冲突`
    - vimdiff home.html home.html.working
    - vimdiff home.html home.html.merge-left
    - vimdiff home.html home.html.merge-right
    - 合并完之后再都check一遍

