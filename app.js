let human = {
  first_name: "Peter",
  last_name: "Parker",
  age: 25,

  say_name() {
    console.log("Hi! my name is " + this.first_name + " " + this.last_name);
  }
};

function oneplusone() {
  return 1 + 1;
}

//console.log(oneplusone())

//console.log(human.first_name);

function Book(title, author, numofbooks) {
  this.title = title;
  this.authorofbook = author;
  this.num = numofbooks;
  this.read = function() {
    console.log(`I just read ${this.title} and it was awesome!!!`);
  };
}

var Bible = new Book("Bible", "unknown", 500);

var alotofbooks = {
  book1: new Book("harry potter", "jkrolling", 1000),
  book2: Bible
};

alotofbooks["book2"].read();

class Food {
  constructor(cal, name, at) {
    this.calories = cal;
    this.name = name;
    this.atnicity = at;
  }
  isTasty(item) {
    if (item.cal > 400) {
      console.log("YUM");
    } else {
      console.log("YUM BUT UNDER 400");
    }
  }
}

var cake = new Food(250, "cherry", "american");

console.log(cake);

cake.isTasty(cake);

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

var squere = new Rectangle(10, 10);

console.log(squere.calcArea());

var size = squere.calcArea();

console.log(size);

function sayCheeze() {
  console.log("cheeze");
}

saycheeze = () => {
  console.log("cheeze");
};
