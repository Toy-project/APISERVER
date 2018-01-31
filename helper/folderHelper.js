const fs = require('fs');
const path = require('path');

exports.createF = (folder, folderPath) => {
  let newFolder = folder;
  const pathArr = folderPath.split('/');

	for( folder in pathArr ){
		const status = module.exports.searchF(newFolder, pathArr[folder]);
    
    if(!status){
      const createFolder = path.join(newFolder, pathArr[folder]);
      // make dir
      fs.mkdir(createFolder, 0777, (err) => {
        if(err) {
          return false;
        }
        return true;
      });
      // path join
			newFolder = path.join(newFolder, pathArr[folder]);
    }
    else {
      continue;
    }
	}
};

exports.searchF = (folder, searchFolder) => {
	fs.readdir(folder, (err, files) => {
    if (err) return false;
    
		files.forEach((file) => {
      if (file === searchFolder) {
				fs.stat(path.join(folder, file), (err, stats) => {
					if(stats.isDirectory()){
						return path.join(folder, file);
					};
				});
			};
		});
	});
	return false;
};

exports.deleteF = (folder) => {
  fs.readdir(folder, (err, files) => {
    if (err) return false;
    
    files.forEach((file) => {
      fs.unlink(`${folder}/${file}`, (err) => {
        if(err) throw err;
      });
    });

    fs.rmdir(folder, (err) => {
      if(err) throw err;
    });
  });
  return false;
};
