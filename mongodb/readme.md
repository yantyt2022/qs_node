MongoDB 是一个 NoSQL数据库
是一个文档数据库 区别关系于关系型数据库
doc json支持全面的JavaScript的解析 它的shell可以用js的风格


mongod -v
mongod --dbpath  ../db/27017
mongod是启动进程

mongo shell
show dbs; 列出数据库
use tutorial 选用数据库
用命名空间的方式
mongodb 不需要先声明，直接保存
collection 集合  名字以s结束
直接插入数据就会建立一个数据表
db.users.insert({username:'smith'}); 插入名字在users数据表
show collections;  显示出数据表
db.users.find({}); 查找users数据表，条件为空
db.users.find({})。pretty（）  显示出来更漂亮
column 可以允许一些冗余


1.      进入cmd终端,进入安装目录下的bin目录下cd e:  切换盘符          cd  E:\mongodbinstall\bin                   
2.      执行mongod.exe –dbpath=你自己对应的路径
mongod.exe —dbpath=D:\data\db
or
mongod -dbpath D:\data\db
 看到如上结果,说明启动成功 
 3.打开另一个黑屏终端,进入安装目录下的bin目录下,在输入mongo.exe
