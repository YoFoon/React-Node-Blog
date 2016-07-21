import Mongoskin from 'mongoskin';
import Settings from './settings';

let Router = ( () => {

    let host = Settings.host,
        port = Settings.port,
        dbName = Settings.dbname,
        str = "mongodb://:@" + host + ":" + port + "/" + dbname;

    let option = {
        native_parser: true
    };

    return Mongoskin.db(str, option);

} )();

export default Router;