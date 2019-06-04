const fs = require('fs');
// const path = require('path');
// fs.readdir('./', function(err, files) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(files);
//     }
// });


// fs.mkdir('./img', {recursive: true}, (err) => {
//     if(err) {
//         console.log(err);
//         console.log('创建失败，原因未知！');
//     } else {
//         console.log('创建成功!');
//     }
// });

// fs.stat(path, (err, stats) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(stats);
//     }
// });

/**
 * 读取路径信息
 * @param  {String} path 路径
 * @return {Object}      Promise对象
 */
function getStat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if(err) {
                resolve(false);
            } else {
                reject(true);
            }
        });
    });
}

/**
 * 创建路径
 * @param {String} dir 路径
 */
function mkdir(dir){
    return new Promise((resolve, reject) => {
        fs.mkdir(dir, err => {
            if(err){
                resolve(false);
            }else{
                resolve(true);
            }
        });
    });
}

/**
 * 路径是否存在，不存在则创建
 * @param {String} dir 路径
 */
async function dirExists(dir){
    let isExists = await getStat(dir);

    //如果该路径且不是文件，返回true
    if(isExists && isExists.isDirectory()){
        return true;
    }else if(isExists){     //如果该路径存在但是文件，返回false
        return false;
    }

    //如果该路径不存在
    const mkdirStatus = await mkdir(dir);
    return mkdirStatus;
}

// dirExists('img');

async function getStat2(path) {
    return await fs.stat(path, (err, stats) => {
        if(err) {
            return false;
        } else {
            return true;
        }
    });
}


// var a = fs.existsSync('img');

// 校验相对目录是否存在，不存在则创建
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

// console.log(a);

checkDirExist('img');