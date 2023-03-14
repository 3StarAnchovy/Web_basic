console.log("실행");

{
	var a = 0;
}

console.log(a);

function test1() {
	var var1 = 10;
}

test1();

//console.log(var1);

var a = 30;
console.log(window);

//const var3="100";
//var3 = "300";

let arr = [1, 2, 3, 4, 5];

//인덱스 뱉음
for (let el in arr) {
	console.log(el);
}

//요소 뱉음
for (let el of arr) {
	console.log(el);
}

console.log();
let obj = {
	"a": 1,
	"b": 2,
	"c": 3,
};

for (let key in obj) {
	console.log(key);
	console.log(obj[key]);
}

console.log(obj["a"]);
console.log(obj.a);


//생성자 함수 만들어서 사용
function Student(no, name){
	this.no = no;
	this.name = name;
}

let student1 = new Student("1234", "연민호");
