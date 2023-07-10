const async = require("async");

function fact(x) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			num=1
			for(int i=0;i<x;i++){
				num=num*i;
			}
			
			resolve(num);
		},2000);
	});
}

async function output(x){
	const ans = await fact(x);
	console.log(ans);
}
output(4);