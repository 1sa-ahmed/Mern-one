// Isa Ahmed assignment - 1 code  
//Send data to Console with template Literal 
let names = prompt('what is your name?');
console.log(`My name is ${names}`);

//Make a devs info console project
let dev_name = prompt('what is your name in your CV?')
let your_old = prompt('How old are you?')
let skill    = prompt('What are you expert in?');

console.info(`My name is ${dev_name}. My age is ${your_old}. I am expert in ${skill} Developer.`);

//Make a result marks project
let school = prompt('What is your school name?');
let student_name = prompt(`What is your name in certificate?`);
let roll_num = 20;

let bd =+ prompt(`What is your bangla score?`);
let en =+ prompt(`What is your English score?`);
let mh = Number(prompt(`What is your Math score?`));
let sc = Number(prompt(`What is your Science score?`));
let sp =+ prompt(`What is your Spanish score?`);
let rn =+ prompt(`What is your Religion score?`);

let total = bd + en + mh + sc + sp + rn;

console.log(`
  Your School Name   - ${school}
  Student Name       - ${student_name}
  Student Roll       - ${roll_num}

    Subject name        Marks
    -------------------------
    Bangla            = ${bd}
    English           = ${en}
    Math              = ${mh}
    Science           = ${sc}
    Spanish           = ${sp}
    Religion          = ${rn}
    -------------------------
    Total Marks      => ${total}
`);

// Make a kobol project

// let marryAgree = ;
console.log(confirm('If you agree to marry, say ok orelse cancel.'))