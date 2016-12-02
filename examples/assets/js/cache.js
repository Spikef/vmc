export var appId = 'vmc';
export var version = '0.0.1';

const timeMap = {
    y: 31536000000,
    m: 2592000000,
    d: 86400000,
    h: 3600000,
    n: 60000,
    s: 1000
};

export const set = function (key, value, expire) {
    var $key = appId + '_' + key;
    var data = {}, storage = sessionStorage;

    if (typeof expire !== 'undefined') {
        if (typeof expire === 'string') {
            expire = expire.replace(/(\d+)(y|m|d|h|n|s)/, ($0, $1, $2) => {
                return $1 * timeMap[$2];
            });
            
            expire = Date.now() + Number(expire);
        }

        storage = localStorage;

        data.expire = expire;
    }

    data.data = value;
    data.version = version;

    storage.setItem($key, JSON.stringify(data));
};

export const get = function (key) {
    var $key = appId + '_' + key;
    
    var data = localStorage.getItem($key) || sessionStorage.getItem($key);
    
    if (!data) return remove(key);
    
    try{
        data = JSON.parse(data);
        
        if (!data.version || data.version !== version) return remove(key);
        
        if (data.expire && data.expire <= Date.now() ) return remove(key);
        
        return data.data;
    }catch(e){
        return remove(key);
    }
};

export const remove = function (key) {
    var $key = appId + '_' + key;
    
    localStorage.removeItem($key);
    sessionStorage.removeItem($key);

    return null;
};

export const clear = function () {
    var keys = [];
    
    for (let i=0, len=localStorage.length; i<len; i++) {
        let key = localStorage.key(i);
        if (key.indexOf(appId) === 0) keys.push({storage: localStorage, key});
    }

    for (let i=0, len=sessionStorage.length; i<len; i++) {
        let key = sessionStorage.key(i);
        if (key.indexOf(appId) === 0) keys.push({storage: sessionStorage, key});
    }

    keys.forEach(v => v.storage.removeItem(v.key));
};

export const append = function (key, data, expire) {
    var old = get(key);
    
    if (!old) {
        set(key, data, expire);
        return data;
    }
    
    for (var i in data) {
        if (!data.hasOwnProperty(i)) continue;
        old[i] = data[i];
    }

    set(key, old, expire);
    return old;
};