const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const mongoUrl = `mongodb://127.0.0.1:27017/vueblog`  //连接数据库
const Schema = mongoose.Schema
//进行model层的抽象
const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
        index:true
    }
})
mongoose.model('User',UserSchema)

mongoose.Promise = global.Promise
mongoose.connection.openUri(mongoUrl).once('open',async() => {
    console.log('database connect success')
}).on('error',(error) => {
    console.warn('database connect fail',error)
})

const main = async(ctx) => {
    const User = mongoose.model('User')
    //新建一个user过程：new User类,成为内存中与Schema规则一致的对象 ->
    const user = new User({
        name:'小田'
    })
    //接口存取是花时间的 IO
    // 数据库读取，文件读取，网络请求
    
    try{
        await user.save()
        ctx.body = 'ok, 保存成功了'
    }catch(e){
        ctx.body = 'sorry，保存失败了'
    }
}
app.use(main)  //启用中间件
app.listen(3000)