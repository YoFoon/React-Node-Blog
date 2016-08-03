import mongoose from "./connect";


let UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
})

//为UserScheme模型追加addUser方法
UserSchema.methods.addUser = function (params, callback) {
    this.name = params.username;
    this.password = params.password;
    this.email = params.email || "yofoon@qq.com";

    this.save(callback);
}


// users 是数据库的一个集合
let User = mongoose.model('users', UserSchema);

export default User;