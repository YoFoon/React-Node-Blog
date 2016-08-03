import UserInstance from './../mongo/user';

import crypto from 'crypto';


export default (req, res) => {

    let username = req.body.username;

    let md5 = crypto.createHash('md5');

    let password = md5.update(req.body.password).digest('hex');

    let data = {};
    data.states = 0;

    UserInstance
        .find({name: username})
        .exec( function(err, item) {

            if(err || item.length == 0) {
                return res.send(data);
            }

            if(item[0].password != password ) {
                data.message = "密码不正确";
                return res.send(data);
            }

            data.states = 1;

            let md5 = crypto.createHash('md5');
            data.name = md5.update(username).digest('hex');
            
            res.send(data);

        } )

}