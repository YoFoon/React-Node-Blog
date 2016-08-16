import mongoose from './connect';
// import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost/blog');

let BlogSchema = new mongoose.Schema({
    title: String,
    name: String,
    tags: String,
    read: Number,
    post: String,
    time: Object,
    key: String
})

//为BlogSchema模型追加addBlog方法
BlogSchema.methods.addBlog = function (params, callback) {
    this.title = params.title;
    this.name = params.name;
    this.tags = params.tags;
    this.read = 0;
    this.post = params.post;
    this.time = params.time;
    this.key = params.key;
    this.mark = 1;
    
    this.save(callback);
}

// posts 是数据库的一个集合
let Blog = mongoose.model('posts', BlogSchema);

export default Blog;