var fs = require('fs');

// var rootPath = '/Users/Haven/Github/examples';
//
// function renameDirectories(directories) {
//     return new Promise(function(resolve, reject) {
//         var actualFolders = directories.filter(function(directory) {
//             return directory.indexOf('.') === -1 && directory !== "LICENSE";
//         })
//
//         actualFolders.forEach(function(folder) {
//             var newFolderName = folder.split('-')[1]
//             fs.rename(rootPath + '/' +folder, newFolderName)
//         })
//
//         dfd.resolve('Directory names changed!')
//     })
// }
//
// function readDirectory() {
//     return new Promise(function(resolve, reject) {
//         fs.readdir(rootPath, function(err, resultOfDesktop) {
//             if (err) reject(err.message)
//
//             resolve(resultOfDesktop);
//         })
//     })
// }
//
// function log(message) {
//     console.log(message);
// }
//
// readDirectory()
//     .then(renameDirectories)
//     .then(log)


// HTTP Example
// var http = require('http');
//
// http.createServer(function(req, res) {
//     res.senFile('<h1>hello world!</h1>')
//     res.end()
// }).listen(3000);