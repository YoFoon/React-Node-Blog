import GetList from "../blog/getList";
import SaveBlog from '../blog/saveBlog';
import Detail from "../blog/detail";
import Login from '../login/login';

export default (app) => {

    app.all("*", (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS");
        res.header("Access-Control-Allow-Headers","x-requested-with,content-type");
        next();
    });

    //获取文章列表
    app.get("/blog/list/:page", GetList);

    //发表文章
    app.post("/blog/post", SaveBlog);

    //获取文章详情
    app.get("/blog/detail/:key", Detail);

    //登录
    app.post("/blog/login", Login);
    
}