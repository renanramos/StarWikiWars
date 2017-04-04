angular.module("sww").filter("ellipsis", function () {
	return function (input, size) {
		if (input.length <= size) return input;
		var output = input.substring(0,(size || 50)) + "...";
		return output;
	};
});