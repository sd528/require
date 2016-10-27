define(['b'], function(isArray){
	function sortArr(arr){
		if(isArray(arr)){//判断参数是否为数组
			return arr.sort(function(a, b){
				return a - b;
			});
		}else{
			return '输入的参数不是个数组';
		}
	}
	return sortArr;
});
