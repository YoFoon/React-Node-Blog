import BlogInstance from './../mongo/blog';

export default (req, res) => {

    var data = {};

    data.status = 0;

    //查找博客
    BlogInstance
        .find({'key':req.params.key})
        .exec( (err, item) => {

            if( err ) {
                return res.send(data);
            }

            //更新阅读量+1
            BlogInstance
                .update({'key':req.params.key}, {'$inc':{'read':1} }, (err) => {

                    if( err ) {
                        return res.send(data);
                    }

                    data.status = 1;
                    data.item = item;
                    return res.send(data);

                });


        } );

}