let SERVICE_URL = 'http://127.0.0.1:8000/';

let ServiceConfig = {
    baseUrl: SERVICE_URL,
    commentUrl: SERVICE_URL + 'view/blog/#/depail/',
    getList: SERVICE_URL + 'blog/list',
    getBlog: SERVICE_URL + 'blog/detail/',
}

export default ServiceConfig;