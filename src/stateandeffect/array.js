let obj = {
    name: "Raju",
    city: "bikaner",
    age: 23
};
let x = "age";
let y = 44;
let ob2={...obj,[x]:y}
console.log(obj);
console.log(ob2);
