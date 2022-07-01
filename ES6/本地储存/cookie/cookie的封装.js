// 写入cookie的封装
const set = (name, value, { domain, maxage, path, secure } = {}) => {
    let cookieText = `${encodeURIComponent(name)}= ${encodeURIComponent(value)}`;
    if (typeof maxage === 'number') {
        cookieText += `; max-age=${maxage}`;
    }
    if (domain) {
        cookieText += `; domain=${domain}`;
    }
    if (path) {
        cookieText += `; path=${path}`;
    }
    if (secure) {
        cookieText += `; secure=${secure}`;
    }
    document.cookie = cookieText;
}

// 通过name获取cookie的值
const get = name => {
    name = `${encodeURIComponent(name)}`;
    let cookies = document.cookie.split('; ');
    for (let item of cookies) {
        const [cookieName, cookieValue] = item.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return;
}

// 根据name，domain，path删除Cookie
const remove = (name, { domain, path } = {}) => {
    set(name, '', { domain, path, maxage: -1 });
}
export { set, get, remove };
// set('name', 'hhh', undefined)//不传或者传undefined会报错{ domain, maxage, path, secure } =undefined会报错