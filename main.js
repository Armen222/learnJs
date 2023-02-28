// Основы JavaScript

// 2.1

    alert("Я JavaScript!");

// 2.4
    // Работа с переменными
    let admin, name;
    name = "Джон";
    admin = name;
    alert( admin );

    // Придумайте правильные имена
    let ourPlanet;
    let currentUserName;


// 2.5
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya


// 2.6
let name = prompt("Ваше имя?", "");
alert(name);

// 2.8
    // Постфиксная и префиксная формы
    a = 2;
    b = 2;
    c = 2;
    d = 1;
    // Результат присваивания
    a = 4;
    x = 5;
    // Преобразование типов
    "" + 1 + 0 = "10"; 
    "" - 1 + 0 = -1 ;
    true + false = 1;
    6 / "3" = 2;
    "2" * "3" = 6;
    4 + 5 + "px" = "9px";
    "$" + 4 + 5 = "$45";
    "4" - 2 = 2;
    "4px" - 2 = NaN;
    "  -9  " + 5 = "  -9  5" ;
    "  -9  " - 5 = -14 ;
    null + 1 = 1 ;
    undefined + 1 = NaN; 
    " \t \n" - 2 = -2 ;
    // Исправьте сложение
    let a = +prompt("Первое число?", 1);
    let b = +prompt("Второе число?", 2);

    alert(a + b);


// 2.9
    //  Операторы сравнения
    5 > 4 // true
    "ананас" > "яблоко" // false
    "2" > "12" // true
    undefined == null // true
    undefined === null // false
    null == "\n0\n" // false
    null === +"\n0\n" // false

//2.10
    //if (строка с нулём) - ДА, выведется

    let offName = prompt('Какое «официальное» название JavaScript?', '');

    if(offName == 'ECMAScript'){
        alert('Верно!')
    }else{
        alert('Не знаете? “ECMAScript”!')
    }

    // Покажите знак числа
    let value = prompt('Введите число', 0);
    if (value > 0) {
    alert( 1 );
    } else if (value < 0) {
    alert( -1 );
    } else {
    alert( 0 );
    }

    // Перепишите 'if' в '?'
    let result;
    result = (a + b < 4) ? 'Мало' : 'Много'


    // Перепишите 'if..else' в '?'
    let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';

// 2.11
    // Что выведет alert (ИЛИ)?       - 2

    // Что выведет alert (ИЛИ)?       - сначала 1, затем 2
    
    // Что выведет alert (И)?
        // alert( 1 && null && 2 );      - null

    //Что выведет alert (И)?
    
        //alert( alert(1) && alert(2) ); - 1, а затем undefined.
    //Что выведет этот код?
        //alert( null || 2 && 3 || 4 );  - 3

    //Проверка значения из диапазона
        //if (age >= 14 && age <= 90)       - if (age >= 14 && age <= 90)

    // Проверка логина
    let userName = prompt("Кто там?", '');

    if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

    } else if (userName === '' || userName === null) {
    alert( 'Отменено' );
    } else {
    alert( "Я вас не знаю" );
    }

//2.13
    //Выведите чётные числа
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
          alert( i );
        }
    }
    
    //Замените for на while
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }

    //Повторять цикл, пока ввод неверен
    let num;

    do {
    num = prompt("Введите число больше 100?", 0);
    } while (num <= 100 && num);

    //Вывести простые числа

    let n = prompt(`Введите максимальное число`, '')
    out: for (let a = 2; a <= n; a++) {
            for (let b = 2; b < a; b++) {
            if (a % b == 0) continue out;
            }
            alert(a); 
        }

//2.14
    //Напишите "if", аналогичный "switch"
    if(browser == 'Edge') {
        alert("You've got the Edge!");
    } else if (browser == 'Chrome'
        || browser == 'Firefox'
        || browser == 'Safari'
        || browser == 'Opera') {
        alert( 'Okay we support these browsers too' );
    } else {
        alert( 'We hope that this page looks ok!' );
    }
    //Переписать условия "if" на "switch"
    const number = +prompt('Введите число между 0 и 3', '');

    switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;

    case 1:
        alert('Вы ввели число 1');
        break;

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    }

//2.15

    //Перепишите функцию, используя оператор '?' или '||'
    function checkAge(age) {
        return (age > 18) ? true : confirm('Родители разрешили?');
    }
          
    function checkAge(age) {
       return (age > 18) || confirm('Родители разрешили?');
    }
    //Функция min(a, b)
    function min(a, b) {
        return a < b ? a : b;
    }
    //Функция pow(x,n)
    let x = +prompt("write number");
    let n = +prompt("write stepen");

    let result;

    function pow (x,n) {
        if (n >= 1 && (n % 1 == 0)) {
        result = x**n;
        alert(result)
        } else {
            alert(`Степень ${n} не поддерживается, используйте натуральное числo`);
        }
    }
    pow(x,n);

//2.17
    //Перепишите с использованием функции-стрелки
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }
      
    ask(
        "Вы согласны?",
        () => alert("Вы согласились."),
        () => alert("Вы отменили выполнение.")
    );


//3.5
    describe("Возводит x в степень n", function() {
        it("5 в степени 1 будет 5", function() {
        assert.equal(pow(5, 1), 5);
        });
    
        // Mocha будет запускать только этот блок
        it.only("5 в степени 2 будет 25", function() {
        assert.equal(pow(5, 2), 25);
        });
    
        it("5 в степени 3 будет 125", function() {
        assert.equal(pow(5, 3), 125);
        });
    });


//4.1
    //Привет, object
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;

    //Проверка на пустоту
    function isEmpty(obj) {
        for (let key in obj) {      
          return false;
        }
        return true;
    }

    //Сумма свойств объекта
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };
      
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }      
    console.log(sum);

    // Умножаем все числовые свойства на 2
    function multiplyNumeric(obj) {
        for (let key in obj) {
          if (typeof obj[key] == 'number') {
            obj[key] *= 2;
          }
        }
    }

//4.4
    //Создайте калькулятор
    let calculator = {
        sum() {
        return this.a + this.b;
        },
    
        mul() {
        return this.a * this.b;
        },
    
        read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
        }
    };
    
    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
    
    //Цепь вызовов
    let ladder = {
        step: 0,
        up() {
          this.step++;
          return this;
        },
        down() {
          this.step--;
          return this;
        },
        showStep() {
          alert( this.step );
          return this;
        }
    };
      
    ladder.up().up().down().showStep().down().showStep();


//4.5

    //Создайте калькулятор при помощи конструктора, new Calculator
    function Calculator1() {

        this.read = function() {
          this.a = +prompt('a?', 0);
          this.b = +prompt('b?', 0);
        };
      
        this.sum = function() {
          return this.a + this.b;
        };
      
        this.mul = function() {
          return this.a * this.b;
        };
    }
      
    let calculator1 = new Calculator1();
    calculator1.read();
      
    alert( "Sum=" + calculator1.sum() );
    alert( "Mul=" + calculator1.mul() );


    //Создайте new Accumulator
    function Accumulator(startingValue) {
        this.value = startingValue;
      
        this.read = function() {
          this.value += +prompt('Сколько нужно добавить?', 0);
        };
      
    }
      
    let accumulator = new Accumulator(1);
    accumulator.read();
    accumulator.read();
    alert(accumulator.value);

//5.2
    //Сумма пользовательских чисел
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");

    alert( a + b );

    //Почему 6.35.toFixed(1) == 6.3?
    Math.round(6.35 * 10) / 10 
    
    //Ввод числового значения
    function readNumber() {
        let num;
      
        do {
          num = prompt("Введите число", 0);
        } while ( !isFinite(num) );
      
        if (num === null || num === '') return null;
      
        return +num;
    }
      
    alert(`Число: ${readNumber()}`);

    //Случайное число от min до max
    function random(min, max) {
        return min + Math.random() * (max - min);
    }
      
    alert(random(1, 5));

//5.3
    //Сделать первый символ заглавным
    let newStr = str[0].toUpperCase() + str.slice(1);

    //Проверка на спам
    function checkSpam(str) {
        let lowerStr = str.toLowerCase();
      
        return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    }

    //Усечение строки
    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
          str.slice(0, maxlength - 1) + '…' : str;
    }

    //Выделить число
    function extractCurrencyValue(str) {
        return +str.slice(1);
    }

//5.4
    //Операции с массивами
    let styles = ["Джаз", "Блюз"];
    styles.push("Рок-н-ролл");
    styles[Math.floor((styles.length - 1) / 2)] = "Классика";
    alert( styles.shift() );
    styles.unshift("Рэп", "Регги");

    //Сумма введённых чисел
    function sumInput() {
        let numbers = [];
      
        while (true) {      
          let value = prompt("Введите число", 0); 
          if (value === "" || value === null || !isFinite(value)) break;      
          numbers.push(+value);
        }      
        let sum = 0;
        for (let number of numbers) {
          sum += number;
        }
        return sum;
    }      
    alert(sumInput());


    //Подмассив наибольшей суммы
    function getMaxSubSum(arr) {
        let maxSum = 0;
        let partialSum = 0;
      
        for (let item of arr) { 
          partialSum += item; 
          maxSum = Math.max(maxSum, partialSum);
          if (partialSum < 0) partialSum = 0; 
        }
      
        return maxSum;
    }

//5.5
    //Переведите текст вида border-left-width в borderLeftWidth
    function camelize(str) {
        return str
          .split('-') 
          .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
          )
          .join('');       
    }

    //Фильтрация по диапазону
    function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b));
    }
      
    let arr = [5, 3, 8, 1];      
    let filtered = filterRange(arr, 1, 4);

    //Фильтрация по диапазону "на месте"
    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
          let val = arr[i];      
         
          if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
          }
        }      
    }
      
    let arr = [5, 3, 8, 1];
      
    filterRangeInPlace(arr, 1, 4); 
    
    //Сортировать в порядке по убыванию
    let arr = [5, 2, 1, -10, 8];
    arr.sort((a, b) => b - a);

    //Скопировать и отсортировать массив
    function copySorted(arr) {
        return arr.slice().sort();
    }      
    let arr = ["HTML", "JavaScript", "CSS"];      
    let sorted = copySorted(arr);
      
    alert( sorted );
    alert( arr );

    //Создать расширяемый калькулятор
    function Calculator() {

        this.methods = {
          "-": (a, b) => a - b,
          "+": (a, b) => a + b
        };
      
        this.calculate = function(str) {
      
          let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
      
          if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
          }
      
          return this.methods[op](a, b);
        }
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };
    }

    //Трансформировать в массив имён
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

    let names = users.map(item => item.name);

    alert( names );

    //Трансформировать в объекты

    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
    }));

    alert( usersMapped[0].id ); // 1
    alert( usersMapped[0].fullName );

    //Отсортировать пользователей по возрасту
    function sortByAge(arr) {
        arr.sort((a, b) => a.age > b.age ? 1 : -1);
    }
      
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
      
    let arr = [ vasya, petya, masha ];
      
    sortByAge(arr);      
      
    
    //Перемешайте массив
   
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }      
    
    let count = {
        '123': 0,
        '132': 0,
        '213': 0,
        '231': 0,
        '321': 0,
        '312': 0
    };
      
    for (let i = 0; i < 1000000; i++) {
        let array = [1, 2, 3];
        shuffle(array);
        count[array.join('')]++;
    }
          
    for (let key in count) {
        alert(`${key}: ${count[key]}`);
    }

    //Получить средний возраст
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
    }
      
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };
      
    let arr = [ vasya, petya, masha ];
      
    alert( getAverageAge(arr) );

    //Оставить уникальные элементы массива
    function unique(arr) {
        let result = [];
      
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
    }
      
    let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", ":-O"
    ];
      
    alert( unique(strings) );

    //Создайте объект с ключами из массива
    function groupById(array) {
        return array.reduce((obj, value) => {
          obj[value.id] = value;
          return obj;
        }, {})
    }

//5.7
    //Фильтрация уникальных элементов массива
    function unique(arr) {
        return Array.from(new Set(arr));
    }

    //Отфильтруйте анаграммы
    function aclean(arr) {
        let obj = {};
      
        for (let i = 0; i < arr.length; i++) {
          let sorted = arr[i].toLowerCase().split("").sort().join("");
          obj[sorted] = arr[i];
        }
      
        return Object.values(obj);
    }
      
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];      
    alert( aclean(arr) );

    //Перебираемые ключи
    let map = new Map();

    map.set("name", "John");

    let keys = Array.from(map.keys());

    keys.push("more");

    alert(keys)

//5.8
    //Хранение отметок "не прочитано"
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];
    
    let readMessages = new WeakSet();
    readMessages.add(messages[0]);
    readMessages.add(messages[1]);
    readMessages.add(messages[0]);

    alert("Read message 0: " + readMessages.has(messages[0])); 
    messages.shift()

    //Хранение времени прочтения
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];
      
    let readMap = new WeakMap();
      
    readMap.set(messages[0], new Date(2017, 1, 1));


//5.9
    //Сумма свойств объекта
    function sumSalaries(salaries) {

        let sum = 0;
        for (let salary of Object.values(salaries)) {
          sum += salary;
        }
      
        return sum; // 650
    }
      
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };


    //Подсчёт количества свойств объекта
    function count(obj) {
        return Object.keys(obj).length;
    }

//5.10
    //Деструктурирующее присваивание
    let user = {
        name: "John",
        years: 30
    };
      
    let {name, years: age, isAdmin = false} = user;

    //Максимальная зарплата
    function topSalary(salaries) {
        let max = 0;
        let maxName = null;
      
        for(const [name, salary] of Object.entries(salaries)) {
          if (max < salary) {
            max = salary;
            maxName = name;
          }
        }
      
        return maxName;
    }


//5.11
    //Создайте дату
    let d = new Date(2012, 1, 20, 3, 12);
    alert( d );

    //Покажите день недели
    function getWeekDay(date) {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
      
        return days[date.getDay()];
    }
      
    let date = new Date(202, 1, 28); 
    alert( getWeekDay(date) )

    //День недели в европейской нумерации
    function getLocalDay(date) {
        let day = date.getDay();
      
        if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
          day = 7;
        }
      
        return day;
    }

    //Какой день месяца был много дней назад?
    function getDateAgo(date, days) {
        date.setDate(date.getDate() - days);
        return date.getDate();
    }

    //Сколько сегодня прошло секунд?
    function getSecondsToday() {
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
        let diff = now - today; 
        return Math.round(diff / 1000);
    }
      
    alert( getSecondsToday() );

    //Последнее число месяца?
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
    }
      
    //Сколько секунд осталось до завтра?
    function getSecondsToTomorrow() {
        let now = new Date();
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
      
        let diff = tomorrow - now; 
        return Math.round(diff / 1000);
    }

    //Форматирование относительной даты
    function formatDate(date) {
        let dayOfMonth = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let diffMs = new Date() - date;
        let diffSec = Math.round(diffMs / 1000);
        let diffMin = diffSec / 60;
        let diffHour = diffMin / 60;      
        
        year = year.toString().slice(-2);
        month = month < 10 ? '0' + month : month;
        dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
        hour = hour < 10 ? '0' + hour : hour;
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        if (diffSec < 1) {
          return 'прямо сейчас';
        } else if (diffMin < 1) {
          return `${diffSec} сек. назад`
        } else if (diffHour < 1) {
          return `${diffMin} мин. назад`
        } else {
          return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
        }
    }

//5.12
    //Преобразуйте объект в JSON, а затем обратно в обычный объект
    let user = {
        name: "Василий Иванович",
        age: 35
    };
      
    let user2 = JSON.parse(JSON.stringify(user));

    //Исключить обратные ссылки
    let room = {
        number: 23
    };
      
    let meetup = {
        title: "Совещание",
        occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
        place: room
    };
      
    room.occupiedBy = meetup;
    meetup.self = meetup;
      
    alert( JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined : value;
    }));