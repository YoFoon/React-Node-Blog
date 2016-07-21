import Blog from "../blog/index";

export default (app) => {

    app.all("*", (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods","GET,POST");
        res.header("Access-Control-Allow-Headers","x-requested-with,content-type");
        next();
    });

    app.get("/blog/list/:page", Blog.getBlogList);

}