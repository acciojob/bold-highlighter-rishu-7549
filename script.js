function highlight() {
    //Write your code here
	let str = document.querySelectorAll('strong');
	str.forEach(ele => {
		ele.style.color = 'green';
	});
}


function return_normal() {
    //Write your code here
let str = document.querySelectorAll('strong');
	str.forEach(ele => {
		ele.style.color = 'black';
    
});
}
