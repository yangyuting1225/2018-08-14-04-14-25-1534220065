module.exports = function main(str) {
   	const ChUP =    [`._.`, `...`, `._.`, `._.`, `...`, `._.`, `._.`, `._.`, `._.`, `._.`]
  	const ChMid =   [`|.|`, `..|`, `._|`, `._|`, `|_|`, `|_.`, `|_.`, `..|`, `|_|`, `|_|`]
  	const ChDown =  [`|_|`, `..|`, `|_.`, `._|`, `..|`, `._|`, `|_|`, `..|`, `|_|`, `..|`]
  	var resultA = ""
  	var resultB = ""
  	var resultC = ""
  	for (var i = 0; i < str.length; i++) {
  		resultA += ChUP[str[i]]
  		resultB += ChMid[str[i]]
  		resultC += ChDown[str[i]]
  		if(i != str.length-1){
  			resultA += " "
  			resultB += " "
  			resultC += " "
  		}
  	}
  	return (resultA + '\n' + resultB + '\n' + resultC + '\n')
};

