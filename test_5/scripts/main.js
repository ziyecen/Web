/**
 * Created by liucan on 2017-03-20.
 */

//document.write("<p>这是一个段落。</p>");
/*
function testFun() {
    var pattern = /^\d+$/g;
    var inValue = document.getElementById('demo').value;
    console.log(inValue);
    if (inValue=="" || inValue.match(pattern) == null) {
        isNaN
        alert("不是数字");
    }
}

var button = document.getElementById('button1');
button.onclick = testFun;

function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

function area_of_circle(r, pi) {
    if (pi) {
        return pi*r*r;
    }else
    {
        return 3.14*r*r;
    }
}
//提升变量声明 不提升变量的赋值
function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        alert('x in bar()' + x);
    }
    bar();
    alert('x in foo()' + x);
}

alert(course);
alert(window.course);

var xiaohong = {
    name: '小红',
    birth: 1992,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
    }
};

var xiaoming = {
    name: 'liucan',
    birth: 1992,
    age: function() {
        var that = this;
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeFromBirth();
    }
}

Math.max.call(null, 3, 5, 4);

var arr = [1, 2, 3, 4, 5];
var re = arr.reduce(function(x, y) {
    return x + y;
});

re = arr.reduce(function(x, y){
    return x*y;
});

re = arr.reduce(function(x, y){
    return x*10+y
});

function string2int(s) {
    var temp = s.map(string);
    temp.reduce(function (x, y) {
        return x + y
    });
}

function normalize(arr) {
    return arr.map(function(val){
        return val[0].toUpperCase() + val.slice(1).toLowerCase();
    });
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var r = arr.filter(function (x) {
   return x % 2 !== 0;
});

var arr1 = ['', 'dd', 'g'];
r = arr1.filter(function (s){
    return s && s.trim();
});

var arr = ['A', "B", 'C'];
r = arr.filter(function (element, index, self) {
    console.log(element);
    console.log(index);
    console.log(self);
});

var arr = ['apple', 'bad', 'cat', 'pear', 'apple'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});

var arr = [10, 20, 1, 2];
arr.sort(function(x,y){
    if (x < y){
        return -1;
    }
    if (x > y){
        return 1;
    }
    return 0;
});

arr.sort(function(x,y){
   if (x < y){
       return 1;
   }

});

var arr = ['apple', 'Google', 'Microsoft'];
arr.sort(function(x,y) {
    var x1 = x.toLowerCase();
    var y1 = y.toLowerCase();
    if (x1 < y1){
        return -1;
    }
    if (x1 > y1){
        return 1;
    }
    return 0;
});

function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y;
    });
}

function lazy_sum(arr) {
    var sum = function () {
         return arr.reduce(function (x, y){
            return x + y;
         });
    }
    return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]);
f();
*/
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function(n){
           return function () {
               return n * n;
           }
        })(i));
    }
    return arr;
}

var results = count();
//console.log(results);
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1());
console.log(f2());
console.log(f3());

(function (x) {
    return x * x;
})(4);

function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
c1.inc();
c1.inc();
c1.inc();

var c2 = create_counter(10);
c2.inc();
c2.inc();

var zero = function (f) {
    return function (x) {
        return x;
    }
};

var one = function (f) {
    return function (x) {
        return f(x);
    }
};

function add(n, m) {
    return function (f) {
        return function(x) {
            return m(f)(n(f)(x));
        }
    }
}

var two = add(one, one);

var three = add(one, two);

var five = add(two, three);

(three(function () {
    console.log('print 3 times');
}))();
/*
x => x * x
*/
(function (x) {
    return x * x;
})

(function  (x) {
    return x + x;
})

x => {
    if (x > 0){
        return x * x;
    }
    else {
        return -x + x;
    }
}

(function (x) {
    if (x > 0){
        return x * x;
    }
    else{
        return -x * x;
    }
})


((x, y ,...rest) => {
    var i, sum = x + y;
    for (i = 0; i<rest.length; i++){
        sum += rest[i];
    }
    return sum;
})

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
};
console.log(obj.getAge());

var obj = {
    birth: 1990,
    getAge: function(year) {
        var b = this.birth;
        var fn = (y) => y - this.birth;
        return fn.call({birth:20000}, year);
    }
};
obj.getAge(2015);

function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

function fib(max) {
    var
        t,
        a = 0,
        b = 0,
        arr = [0, 1];
        while(arr.length < max) {
            t = a + b;
            a = b;
            b = t;
            arr.push(t);
        }
    return arr;
}

function* fib(max){
    var t,
        a = 0,
        b = 1,
        n = 1;
    while(n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
}
//var f = fib(5);
//f.next();
//f.next();
//f.next();
//f.next();
//f.next();
for (var x of fib(10)) {
    console.log(x);
}

var fib_1 = {
    a: 0,
    b: 1,
    n: 0,
    max: 0,
    setmax: function (x) {
        this.max = x;
    },
    next: function () {
        var
            r = this.a,
            t = this.a + this.b;
        this.a = this.b;
        this.b = t;
        if (this.n < this.max) {
            this.n ++;
            return r;
        }else {
            return undefined;
        }

    }
};

fib_1.setmax(10);
console.log(fib_1.max);
console.log(fib_1.next());
console.log(fib_1.next());
console.log(fib_1.next());

//function create_counter(initial) {
//    var x = initial || 0;
//    return {
//        inc: function () {
//            x += 1;
//            return x;
//        }
//    }
//}

function next_id1 () {
    var current_id = 0;
    return function () {
        return current_id++;
    };
}

var n = next_id1();
console.log(n());
console.log(n());

var id = {
    idn: 0,
    set_idn: function(n) {
        this.idn = n;
    },
    next_id: function() {
        var fn = () => (this.idn)++;
        return fn();
    }
}

id.set_idn(10);
id.next_id();
console.log(id.idn);

function* next_id () {
    var id = 1;
    while(true)
    {
        var s = yield id++;
        console.log(s);
    }
    return true;
}

var
    x,
    pass = true,
    g = next_id();
for(x = 1; x<100; x++) {
    if (g.next().value != x) {
        pass = false;
        alert('faile');
        break;
    }
}
if (pass) {
    //alert('success');
}

function* f() {
    for(var i = 0; true; i++) {
        var reset = yield i;
        if (reset) {
            i = -1;
        }
    }
}

var g = f();
g.next();
g.next();
g.next(true);

//{value: index, done:true};
function gen(array) {
    var nextIndex = 0;
    typeof nextIndex === 'undefined'
    return {
        next: function () {
            return nextIndex < array.length ?
            {value: array[nextIndex++], done: false} :
            {value:undefined, done: true};
        }
    };
}

var it = gen(['a', 'v']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function* foo1(x) {
    var y = 2 * (yield(x + 1));
    var z = yield( y / 3);
    return (x + y + z);
}

var a = foo1(5);
a.next(); //6
a.next(); //NaN
a.next(); //NaN

var b = foo1(10);
console.log(b.next()); //x=10 return 11
console.log(b.next(9)); //(yield(x + 1))=9  y=18 return 6
console.log(b.next(30)); //z=30 return 58

var g = function* () {
    try {
        yield;
    }catch (e) {
        console.log('内部捕获', e);
    }
}

var i =g();
i.next();
try {
    i.throw('a');
    i.throw('b');
}catch(e) {
    console.log('外部捕获', e);
}

function* gen2() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}
let gg = gen2();
console.log(gg.return("JHHH"));

function* gen3() {
    console.log(this);
    yield 0;
};

function* dataConsumer() {
    console.log('Started');
    console.log(`1.${yield}`);
    console.log(`2.${yield}`);
    return 'result';
}

let genObj = dataConsumer();

genObj.next();
genObj.next('a');
genObj.next('b');

function* foo3() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (let v of foo()) {
    console.log(v);
}

function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log();
}

var n = Number('123');
typeof n;

var b = Boolean('true');
typeof b;

var b2 = Boolean('false');
s = [1, 2, 3]
console.log(Array.isArray(s));
var myVar;
console.log(myVar === null);

// 123.toString();
console.log(typeof(123..toString()));

//日期 时间
var now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());
console.log(Date.now());

var now1 = new Date(1492416898900);
console.log(now1.toLocaleString());
console.log(now1.toLocaleDateString());
console.log(now1.toLocaleTimeString());

function formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();;
    var hours = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + month + "-" + date + " " + hours + ":" + minute + ":" + second;
}

function timeToLocalString(nS) {
    return new Date();
}

var sdate = formatDate(now1);
console.log(sdate);

var dates = new Date();

dates.getMonth = function() {
    let a = new Date();
    return a.getMonth() + 1;
}

/*
* 返回年月日
* @tag:设置分隔符，如果不设置，默认使用"-"
*/
dates.getYMD = function(tag) {
    var tag = (tag === null || tag === undefined || tag === ""?"-":tag);
    tag = new String(tag);
    var month = dates.getMonth();
    month = padNumber(month, 2);
    var ymd = dates.getFullYear() + tag + month + tag + padNumber(dates.getDate(),2);
    return ymd;
}

/*
 * 返回时分秒
 * @tag:设置分隔符，如果不设置，默认使用";"
 */
dates.getHMS = function (tag) {
    var tag = (tag === null || tag === undefined || tag === ""?":":tag);
    tag = new String(tag);
    var hms = padNumber(dates.getHours(),2) + tag + padNumber(dates.getMinutes(),2) + tag + padNumber(dates.getSeconds(),2);
    return hms;
}

dates.getFullTime = function(args) {
    if (isNaN(args)) {
        return dates.getYMD() + " " + dates.getHMS();
    }
    switch(args.length) {
        case 0:
            return dates.getYMD() + " " + dates.getHMS();
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            return dates.getYMD(args[0]) + args[1] + dates.getHMS(args[2]);
            break;
        default:
            return dates.getYMD() + " " + dates.getHMS();
            break;
    }
}

dates.get12Hours = function() {
    return (dates.getHours() < 12 ?dates.getHours():dates.getHours()-12);
}

var d = new Date(now.getTime())
d.toUTCString()

//补0
function pad(num, n) {
    return Array((n-(''+ num).length+1)).join(0) + num;
}

function padNumber (num, fill) {
    var len = (''+num).length;
    return (Array(fill > len ? fill-len+1||0 : 0).join(0) + num);
}

console.log(pad(10, 10));
console.log(padNumber(10,6));
console.log(padNumber('ss',4));

//regexp
var reg = /^\d{4}\-\d{1,2}\-\d{1,2}\s\d{1,2}\:\d{1,2}\:\d{1,2}$/;
var fulltime = dates.getFullTime();
console.log(fulltime)
console.log(reg.test(fulltime));
console.log('exec',reg.exec(fulltime));

var reg1 = /^(j|J)ava(S|s)cript$/;
var test_s = "javascript"
console.log(reg1.test(test_s));

var reg2 = new RegExp('[a-zA-Z\\_\\$][0-9a-zA-Z\\_\\$]+');
var reg3 = /^\d{3}\-\d{3,8}/;

test_s = "a, b;    c"
console.log(test_s.split(' '));
console.log(test_s.split(/\s+/));
console.log(test_s.split(/[\s\,\;]+/));

reg1 = /^(\d{3})-(\d{3,8})$/;
console.log(reg1.exec('010-123456'));
console.log(reg1.exec('010 123456'));

reg = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
console.log(reg.exec(fulltime));

var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;

re = /^(\d+?)(0*)$/;
console.log(re.exec('102300'));

var s = 'Javascript, VBScript, JScript and ECMScript';
re = /[a-zA-Z]+Script/gi;
console.log(re.exec(s));
console.log(re.lastIndex);
console.log(re.exec(s));
console.log(re.lastIndex);
console.log(re.exec(s));
console.log(re.lastIndex);
console.log(re.exec(s));
console.log(re.lastIndex);
console.log(re.exec(s));
console.log(re.lastIndex);

re = /^\w+[\w\.]*\@\w+\.(com|org)$/;
var s1 = '@voyager.org';
console.log(re.test(s1));

function isPasswd(s) {
    var re = /^(\w){6,20}$/;
    if(!re.exec(s)) {
        return false;
    }else {
        return true;
    }
}

re = /^<([\w\s]+)>\s*(\w+\@\w+\.org)$/;
var r = re.exec('<Tom Paris> tom@voyager.org');
console.log(r)

var xiaoming = {
    name: '小明',
    age: 18.,
    gender: true,
    height: 1.85,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    //toJSON: function () {
    //    return {
    //        'Name': this.name,
    //        'age': this.age
    //    };
    //}
};

console.log(JSON.stringify(xiaoming, null, '    '));
console.log(JSON.stringify(xiaoming, ['name', 'skills'], '  '));

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

console.log(JSON.stringify(xiaoming, convert, ' '));

console.log(JSON.parse('[1,2,3,true]'));
console.log(JSON.parse('{"name":"小明","age":14}'));
console.log('true');
console.log('123.45');

var jsr = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    if (key === 'age') {
        return value * 2;
    }
    return value;
});
console.log(jsr);

var Student = {
    name: 'Robot',
    height: 1.8,
    run: function () {
        console.log(this.name + ' is running');
    }
};

function createStudent(name) {
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaomin = createStudent('小明');
xiaomin.run();
console.log(xiaomin.__proto__ === Student);

var arr = [1, 2, 3];
arr

function student(name) {
    this.name = name;
}

student.prototype.hello = function () {
    console.log('hello, ' + this.name + '!');
}

var xiaohong = new student('小红');
var lc = new student('lc');
console.log(xiaohong.name);
xiaohong.hello();

console.log(xiaohong.constructor === student.prototype.constructor);
console.log(student.prototype.constructor === student);
console.log(Object.getPrototypeOf(xiaohong) === student.prototype);
console.log(xiaohong instanceof student);

console.log(xiaomin.name);
console.log(xiaohong.name);
lc.hello();
xiaohong.hello();
console.log(xiaohong.hello === lc.hello);

function Cat (name) {
    this.name = name;

};
Cat.prototype.say = function() {
    return 'Hello, ' + this.name + '!';
}

function PrimaryStudent(props) {
    student.call(this, props);
    this.grade = props.grade || 1;
}

function Func() {
}

Func.prototype = student.prototype;

PrimaryStudent.prototype = new Func();
PrimaryStudent.prototype.constructor = PrimaryStudent;
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
//
//定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；
//
//借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
//
//继续在新的构造函数的原型上定义新方法。
function Teacher(props) {
    this.name = props.name || 'Unnan';
}
Teacher.prototype.hello = function () {
    console.log('Hello, ' + this.name);
};

function PrimaryTeacher(props) {
    Teacher.call(this, props);
    this.grade = props.grade || 1;
};

inherits(PrimaryTeacher, Teacher);
PrimaryTeacher.prototype.getGrade = function () {
    return this.grade;
};

class Leader {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console("ssss " + this.name);
    }
}

class  NewTeacher extends Teacher {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    myGrade() {
        console.log("UI jj" + this.grade);
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    say() {
        console.log("ddd");
    }
}

// //**********************************
// console.log('appName = ' + navigator.appName + '\n' +
//             'appVersion = ' + navigator.appVersion + '\n' +
//             'language = ' + navigator.language + '\n' +
//             'platform = ' + navigator.platform + '\n' +
//             'userAgent = ' + navigator.userAgent);
//
// console.log(screen.width, screen.height);
// console.log(location.href, location.protocol, location.host, location.port);

//if (confirm('重新加载当前页' + location.href + '?')) {
//    location.reload();
//}else {
//    location.assign('/discuss');
//}

document.title = 'JavaScript';

var i, s, menu, drinks;
menu = document.getElementById('drink-menu');
console.log(menu.tagName);
drinks = document.getElementsByTagName('dt');
s = 'All: ';
for (i=0;i<drinks.length;i++) {
    s = s + drinks[i].innerHTML + ',';
}
console.log(s);
console.log(document.cookie);

//var test = document.getElementById('test');
//var trs = document.getElementById('test-table').getElementsByTagName('tr');
//var reds = document.getElementById('test-div').getElementsByClassName('red');
//var cs = test.children;
//var first = test.firstElementChild;
//var last = test.lastElementChild;

//var q1 = document.querySelector('#q1');
//var ps = q1.querySelectorAll('div.highlighted > p');

var p = document.getElementById('p-id');
p.innerHTML = 'ABC';
p.innerHTML = 'ABC <span style="color:red">RED</span> '
p.innerText = '<script>alert("hiii")</script>';

p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';

js = document.getElementById('js');
var list = document.getElementById('list');
list.appendChild(js);

var haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);

var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p{color: red}';
document.getElementsByTagName('head')[0].appendChild(d);

var list1 = document.getElementById('list');
var ref = document.getElementById('python');
haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list1.insertBefore(haskell, ref);

var i, c;
for (i = 0; i < list1.children.length; i++) {
    c = list.children[i];
    console.log(c);
}

var lang = document.getElementsByClassName('lang');
var langarr = [];
for (var i =0; i < lang.length; i++) {
    langarr[i] = lang[i].innerHTML;
}
langarr.sort();
for (var i =0; i < langarr.length; i++) {
    lang[i].innerHTML = langarr[i];
}

var selfE = document.getElementById('python');
var parentE = selfE.parentElement;
var removed = parentE.removeChild(selfE);
console.log(removed === selfE);

var parent = document.getElementById('test-list');

for (var i=0; i<parent.children.length; i++) {
    var text = parent.children[i].innerText;
    console.log(text,i);
}

for (var i=0; i<parent.children.length; i++) {
    var text = parent.children[i].innerText;
    console.log(text,i);
    if (text == 'Swift' || text == 'ANSI C' || text == 'DirectX') {
        console.log("************",text,i);
        parent.removeChild(parent.children[i]);
    }
};

var passwordInput = document.getElementById('passwordInput');
console.log(passwordInput.value);
passwordInput.value = '123456789';

var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
console.log(mon.checked);
console.log(tue.checked);
mon.checked = true;
tue.checked = true;

function checkForm() {
    var form = document.getElementById('test-form');
    return true;
}

var checkRegisterForm = function () {
    let userName = document.getElementById("username");
    let password_1 = document.getElementById("password");
    let password_2 = document.getElementById("password-2");

    let re = /^(\w){3,10}$/;
        if (!re.test(userName.value)) {
            alert('用户名长度为3-10字母或数字组成');
            return false;
        } else if (password_1.value.length < 6 || password_1.value.length > 20) {
            alert('密码长度6-20');
            return false;
        } else if (password_1.value !== password_2.value) {
            alert('两次输入密码不一致');
            return false;
        } else {
            return true;
        }
};

(function () {
    window.testFormHandler = checkRegisterForm;
    var form = document.getElementById('test-register');
    if (form.dispatchEvent) {
        var event = new Event('submit', {
            bubbles: true,
            cancelable: true
        });
        form.dispatchEvent(event);
    } else {
        form.fireEvent('onsubmit');
    }
})();

(function(){
    let fileInput = document.getElementById('test-image-file');
    let info = document.getElementById('test-file-info');
    let preview = document.getElementById('test-image-preview');
    fileInput.addEventListener('change', function() {
        preview.style.backgroundImage = '';
        if (!fileInput.value) {
            info.innerHTML = '没有选择文件';
            return;
        }
        let file = fileInput.files[0];
        info.innerHTML = '文件：' + file.name + '<br>' +
                         '大小：' + file.size + '<br>' +
                         '修改：' + file.lastModifiedDate;
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
            alert('不是有效的图片文件');
            return;
        }
        let reader = new FileReader();
        //文件读取成功完成时触发
        reader.onload = function(e) {
            let data = e.target.result;
            preview.style.backgroundImage = 'url(' + data + ')';
        };
        reader.readAsDataURL(file);
    });
})();

//ajax
function success(text) {
    let textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    let textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

function request() {
    let xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xmlHttp;
}

let requestHttp = request();
requestHttp.onreadystatechange = function () {
    if (request.readyState ===4) {
        //请求已完成，且响应已就绪
        if (request.status === 200) {
            return success(request.responseText);
            // let xmlDoc = request.responseXML;
            // let txt = "";
            // let x = xmldoc.getElementsByTagName('ARTIST');
            // for (i=0; i<x.length; i++) {
            //     txt = txt + x[i].childNodes[0].nodeValue + "<br>";
            // }
            // document.getElementById("myDiv").innerHTML = txt;
        }else {
            return fail(request.status);
        }
    } else if (request.readyState === 0) {
        alert('请求未初始化');
    } else if (request.readyState === 1) {
        alert('服务器连接已建立');
    } else if (request.readyState === 2) {
        alert('请求已接收');
    } else if (request.readyState === 3) {
        alert('请求处理中');
    }

}

requestHttp.open('GET', '/api/categories');
requestHttp.send();
alert('请求已发送，请等待响应....');


function showCustomer(str)
{
    var xmlhttp = request();
    if (str === "") {
        document.getElementById(textHint).innerHTML = "";
        return;
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "/try/ajax/getcustomer/php?q="+str, true);
    xmlhttp.send();
}

function refreshPrice(data) {
    var p = document.getElementById('test-jsonp');
    p.innerHTML = '当前价格：' +
        data['0000001'].name +': ' +
        data['0000001'].price + '；' +
        data['1399001'].name + ': ' +
        data['1399001'].price;
}

function getPrice() {
    let js = document.createElement('script');
    let head = document.getElementsByTagName('head')[0];
    js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
    head.appendChild(js);
}


