'use strict';

function double_to_one(collection) {
	var arr = [];
	for(var i = 0; i < collection.length; i++){
		arr=arr.concat(collection[i]);
	}
	return arr;	
  //在这里写入代码
}

module.exports = double_to_one;
