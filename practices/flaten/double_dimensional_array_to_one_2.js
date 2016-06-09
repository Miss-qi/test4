'use strict';

function double_to_one(collection) {
	var temp = [];
	for(var i = 0; i < collection.length; i++){
		if(temp.indexOf(collection[i]) === -1){
			temp.push(collection[i]);
		}
	}
	return temp;
  //在这里写入代码
}

module.exports = double_to_one;
