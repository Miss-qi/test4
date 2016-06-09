'use strict';

function double_to_one(collection) {
	var arr = [];
	var temp = [];
	for(var i = 0; i < collection.length; i++){
		arr=arr.concat(collection[i]);
	}
	for(var i = 0; i < arr.length; i++){
		if(temp.indexOf(arr[i]) === -1){
			temp.push(arr[i]);
		}
	}
	return temp;
  //在这里写入代码
}

module.exports = double_to_one;
