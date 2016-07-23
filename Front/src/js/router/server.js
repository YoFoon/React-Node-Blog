let SERVICE_URL = 'http://127.0.0.1:8000/';

let ServiceConfig = {
    baseUrl: SERVICE_URL,
    getList: SERVICE_URL + 'blog/list',
    getBlog: SERVICE_URL + 'blog/detail/',
    commentUrl: 'http://127.0.0.1:3000/' + 'view/blog/#/detail/'
}

export default ServiceConfig;