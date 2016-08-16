import BlogInstance from './../mongo/blog';

export default (req, res) => {

    let data = {};
    data.states = 0;

    let page = req.params.page;

    BlogInstance
        .find({})
        .limit(10)
        .sort({_id: -1})
        .exec( (err, items) => {

            if(err) {
                return res.send(data);
            }

            data.states = 0;
            data.items = items;
            res.send(data);

        } );
}