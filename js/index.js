/*let msg=document.getElementById("id");
let btn=document.getElementById("btn");

btn.onclick=function(){
    msg.innerText="you clicked me";
    msg.style.color="red"; };


    let btn2=document.getElementById("btn2");
    let input=document.getElementById("input"); 

    btn2.onmouseover=function(){
        btn2.innerText="you hovered over me";
        btn2.style.color="blue"; };      


        let title=document.getElementById("title");
        let loadData=document.getElementById("loadData");

        loadData.onclick=function(){
            title.innerText="clr changed";
            title.style.color="green"; };

    let numbers = [ 10, 20,30,40,50];
    let sum = "";

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] + " ";
    }   

    console.log(sum.trim());

    let doubled = numbers.map(n=>n*2);
    doubled.forEach(n=>console.log(n));


 
    let add = (a,b) => a+b;
    console.log(add(5,10));

    

    let name= "jay";
    
    console.log(`hello , ${name}`);

    

    let std={name: "sarah", age: 25, major: "cs"};
    let {name:stdname,age,major}=std;
    console.log(stdname,age,major);
  



let flo= [ { name: "sarah", age: 25, major: "cs"},
          { name: "john", age: 30, major: "math"},
          { name: "emma", age: 22, major: "physics"}];

          let ul=document.getElementById("ul");

          flo.forEach(std=>{
            let li=document.createElement("li");
            li.innerText=`${std.name} is ${std.age} years old and majors in ${std.major}`;
            ul.appendChild(li);
          });  */

          function greet(name , callback){
            console.log(`Hello, ${name}!`);
            callback();
          }


          function done(){
            console.log("Greeting is done.");
          }

          greet("Jay", done);
