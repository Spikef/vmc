import cache_keys from '../assets/js/cache-keys';
import * as cache from './cache';
import * as easingEquations from '../assets/js/easing';
import * as exif from '../assets/js/exif';

export const env = {
    isIphone: /iphone|ipad|ipod/i.test(window.navigator.userAgent),
    isWechat: /MicroMessenger/i.test(window.navigator.userAgent),
    isUCBrowser: /UCWEB|UCBrowser/i.test(window.navigator.userAgent)
};

export function setTitle(title) {
    document.title = title;
}

export const is = {
    has(val) {
        return !!val;
    },
    not(val) {
        return !val;
    },
    empty(val) {
        return val === '';
    },
    mobile(val) {
        return val && /(^(13\d|14[57]|15[^4\D]|17[13678]|18\d)\d{8}|170[^346\D]\d{7})$/.test(val);
    },
    email(val) {
        return val && /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val);
    },
    equal(v1, v2) {
        return v1 === v2;
    },
    bank(val) {
        if (!val) return false;
        val = String(val);
        
        var lastNum=val.substr(val.length-1,1);     //取出最后一位（与luhm进行比较）
        var first15Num=val.substr(0,val.length-1);  //前15或18位
        var newArr=[];
        for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
            newArr.push(first15Num.substr(i,1));
        }
        var arrJiShu=[];  //奇数位*2的积 <9
        var arrJiShu2=[]; //奇数位*2的积 >9

        var arrOuShu=[];  //偶数位数组
        for(var j=0;j<newArr.length;j++){
            if((j+1)%2==1){//奇数位
                if(parseInt(newArr[j])*2<9) {
                    arrJiShu.push(parseInt(newArr[j])*2);
                } else {
                    arrJiShu2.push(parseInt(newArr[j])*2);
                }
            } else {
                //偶数位
                arrOuShu.push(newArr[j]);
            }
        }

        var jishu_child1=[];//奇数位*2 >9 的分割之后的数组个位数
        var jishu_child2=[];//奇数位*2 >9 的分割之后的数组十位数
        for(var h=0;h<arrJiShu2.length;h++){
            jishu_child1.push(parseInt(arrJiShu2[h])%10);
            jishu_child2.push(parseInt(arrJiShu2[h])/10);
        }

        var sumJiShu=0; //奇数位*2 < 9 的数组之和
        var sumOuShu=0; //偶数位数组之和
        var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
        var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal;
        for(var m=0;m<arrJiShu.length;m++){
            sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
        }

        for(var n=0;n<arrOuShu.length;n++){
            sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
        }

        for(var p=0;p<jishu_child1.length;p++){
            sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
            sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
        }
        //计算总和
        sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

        //计算Luhm值
        var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
        var luhm= 10-k;

        return lastNum == luhm;
    }
};

// requestAnimationFrame
var requestAnimationFrame = (function() {
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

export const expand = function (element, distance, duration = 3000, callback) {
    var currentTime = 0,
        startTime = 0;
    
    function tick() {
        currentTime = Date.now();

        var p = Math.min(1, (currentTime - startTime) / duration);
        var t = distance * p;
        
        if (p < 1) {
            requestAnimationFrame(tick);
            
            element.style.height = t + 'px';
        } else {
            element.style.height = distance + 'px';

            callback && typeof callback === 'function' && callback();
        }
    }

    startTime = Date.now();
    tick();
};

export const collapse = function (element, distance, duration = 3000, callback) {
    var currentTime = 0,
        startTime = 0;

    function tick() {
        currentTime = Date.now();

        var p = Math.min(1, (currentTime - startTime) / duration);
        var t = distance * (1 - p);

        if (p < 1) {
            requestAnimationFrame(tick);

            element.style.height = t + 'px';
        } else {
            element.style.height = '0px';

            callback && typeof callback === 'function' && callback();
        }
    }

    startTime = Date.now();
    tick();
};

/**
 * scrollTo position
 * @param container: the container current scrollTop
 * @param element: the target scrollY property
 * @param offset: the offset padding
 * @param duration: total animation time
 * @param easing: easing equation to use
 */
export const scrollTo = function (container, element, offset = 0, duration = 500, easing = 'easeOutSine') {
    var scrollY = container.scrollTop,
        scrollTargetY = getPos(element).top + offset,
        currentTime = 0,
        startTime = 0;

    // add animation loop
    function tick() {
        currentTime = Date.now();

        var p = (currentTime - startTime) / duration;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimationFrame(tick);

            container.scrollTop = scrollY + ((scrollTargetY - scrollY) * t);
        } else {
            container.scrollTop = scrollTargetY;
        }
    }

    // call it once to get started
    startTime = Date.now();
    tick();
};

/**
 * get element position of screen
 * @param element
 * @returns {number}
 */
/**
 * 
 * @param element
 * @returns {{ top, left }}
 */
export const getPos = function(element) {
    var left = 0,
        top = 0;
    
    if (!element) return { top, left };
    
    do {
        left += element.offsetLeft;
        top += element.offsetTop;
    } while ( element = element.offsetParent );

    return { top, left };
};

var write = document.write;

export const loadJs = function (urls, callback, fallback) {
    if (typeof urls !== 'string' && !Array.isArray(urls)) return;
    var arrays = Array.isArray(urls) ? urls : [urls];
    if (!arrays.length) return;

    var src = arrays.shift();
    
    document.write = function(content) {
        var matches = /<script[^>]+src="([^"]+)"/i.exec(content);

        if (matches && matches[1]) {
            arrays.push(matches[1]);
        } else {
            var html = document.body.innerHTML;
            document.body.innerHTML = html + content;
        }
    };
    
    appendScript(src, function () {
        if (arrays.length) {
            loadJs(arrays, callback);
        } else {
            document.write = write;
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    }, function () {
        unloadJs(src, function () {
            console.error('Failed to load: ' + src);
            
            document.write = write;
            if (fallback && typeof fallback === 'function') {
                fallback();
            }
        });
    });
};

export const unloadJs = function (urls, callback) {
    if (typeof urls !== 'string' && !Array.isArray(urls)) return;
    var arrays = Array.isArray(urls) ? urls : [urls];
    if (!arrays.length) return;
    arrays = arrays.map(u => u.replace(/^[^/]*?\/\//, ''));

    var scripts = document.body.querySelectorAll('script');
    for (let script of scripts) {
        let src = script.getAttribute('src');
        if (!!~arrays.indexOf(src)) {
            document.body.removeChild(script);
        }
    }
    
    if (callback && typeof callback === 'function') {
        callback();
    }
};

function appendScript(src, callback, fallback) {
    if (existsScript(src)) {
        if (callback && typeof callback === 'function') callback();
        return;
    }

    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = src;
    if (callback && typeof callback === 'function') script.onload = callback;
    if (fallback && typeof fallback === 'function') script.onerror = fallback;
    
    document.body.appendChild(script);
}

function existsScript(src) {
    var scripts = document.body.querySelectorAll('script');
    for (let script of scripts) {
        if (script.getAttribute('src') === src) {
            return true;
        }
    }
    
    return false;
}

export const bodyString = function (obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        var data = {};
        
        for (let i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            for (let j in obj[i]) {
                if (!obj[i].hasOwnProperty(j)) continue;
                data[i + '[' + j + ']'] = obj[i][j];
            }
        }
        
        return data;
    } else {
        return String(obj);
    }
};

export {
    cache_keys,
    cache,
    exif
};