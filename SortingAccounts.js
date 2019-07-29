var accounts = [];
for(i = 0; i < 30; i++){
	if(i % 3 == 0){
		accounts[i] = {credit:generateRandomNumber(),debit:generateRandomNumber(), accountNumber:i};
	}else if (i % 3 == 1){
		accounts[i]= {credit:null, debit: generateRandomNumber(),accountNumber:i};
	}else{
		accounts[i] = {credit:null,debit:null, accountNumber:i};
	}
}
function generateRandomNumber(){
	return Math.floor(Math.random() * 100);
}
function sort(accounts){
	var list0 = [];
	var list1 = [];
	var list2 = [];
	var result = [];
	for (var i = 0; i < accounts.length ; i++) {
		if(accounts[i].credit != null){
			list0.push(accounts[i]);
		} else if(accounts[i].debit != null){
			list1.push(accounts[i]);
		}else{
			list2.push(accounts[i]);
		}
	}
	list0.reverse();
	list1.reverse();
	list2.reverse();
	result.push(list0);
	result.push(list1);
	result.push(list2);
	return result;
}
console.log(sort(accounts));
