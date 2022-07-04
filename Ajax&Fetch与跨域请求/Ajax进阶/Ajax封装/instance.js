import Ajax from './Ajax.js';
const ajax = (url, options) => {
    return new Ajax(url, options).getXHR();

};

//只发送GET请求
const get = (url, options) => {
    return ajax(url, { ...options, method: 'GET' });
};
const post = (url, options) => {
    return ajax(url, { ...options, method: 'POST' });
};
const getJSON = (url, options) => {
    return ajax(url, { ...options, method: 'GET', responseType: 'json' });
};
export { ajax, get, post, getJSON };