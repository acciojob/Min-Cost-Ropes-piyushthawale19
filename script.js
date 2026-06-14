function mincost(arr)
{ 
	 if (arr.length<=1) return 0;

	let cost =0;

	arr.sort((a,b)=> a-b);
	while (arr.length>1){
		let first = arr.shift();
		let second = arr.shift();

		let sum = first+ second;
		cost+=sum;

		let i=0;
		while (i<arr.length && arr[i]<sum){
			i++;
		}  
		arr.splice(i,0,arr)
		
	}
	return cost;
  
}

module.exports=mincost;
