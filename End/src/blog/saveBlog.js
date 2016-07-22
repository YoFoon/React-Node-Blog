import BlogInstance from './../mongo/blog';

export default (req, res) => {

    let SaveBlog = new BlogInstance();

    let date = new Date();

    //存储各种时间格式，方便以后扩展
    let time = {
        date: date,
        year : date.getFullYear(),
        month : date.getFullYear() + "-" + (date.getMonth() + 1),
        day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + 
        date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) 
    }

    let name = req.body.name || 'YoFoon';

    SaveBlog.addBlog({

        name: name,
        tags: req.body.tags,
        post: req.body.post,
        time: time,
        key: req.body.key || req.body.title,
        title: req.body.title

    }, (err) => {

        let data = {};
        data.status = 0;

        if( err ) {
            return res.send(data);
        }
        
        data.status = 1;
        return res.send(data);

    } )

}