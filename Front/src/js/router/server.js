let SERVICE_URL = 'http://127.0.0.1:8000/';
let COMMENT_url = window.location.origin;

let ServiceConfig = {
    baseUrl: SERVICE_URL,
    getList: SERVICE_URL + 'blog/list',
    getBlog: SERVICE_URL + 'blog/detail/',
    logIn: SERVICE_URL + 'blog/login',
    post: SERVICE_URL + 'blog/post',
    commentUrl: COMMENT_url + '/view/blog/#/detail/'
}

export default ServiceConfig;