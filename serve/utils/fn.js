const fs = require('fs');
const http = require('http');
const path = require('path');

/**
 * 校验相对目录是否存在，不存在则创建
 * @param  {String} path 相对路劲
 */
function checkDirExist(path) {
    const pathArr = path.split('/');
    let _path='';
    for(let i = 0, leng = pathArr.length;i < leng; i++){
        _path += pathArr[i];
        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
        }
        _path += '/';
    }
}

/**
 * 下载图片
 *
 * @param {string} imgDir 存放图片的文件夹
 * @param {string} url 图片的 URL 地址
 */
exports.downloadImg = function(imgDir, url) {
    // TODO:判断当前存放图片的文件夹是否存在再执行下一步
    checkDirExist(imgDir);
    http.get(url, function(res) {
        var data = '';

        res.setEncoding('binary');

        res.on('data', function(chunk) {
            data += chunk;
        });

        res.on('end', function() {
            // 调用 fs.writeFile 方法保存图片到本地
            fs.writeFile(imgDir + '/' + path.basename(url), data, 'binary', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Image downloaded:', path.basename(url));
            });
        });
    }).on('error', function(err) {
        console.log('错误');
        console.log(err);
    });
};

/**
 * 保存数据到本地
 *
 * @param {string} path 保存数据的文件
 * @param {array} data 信息数组
 */
exports.saveData = function(path, data) {
    // 调用 fs.writeFile 方法保存数据到本地
    fs.writeFile(path, JSON.stringify(data, null, 4), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Data saved');
    });
};
