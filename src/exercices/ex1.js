// 1) Faire la moyenne d'age des employés ci-dessous (utiliser les méthodes de Array)
// 2) Faire un console.log du résultat

const data = {"employees":[    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41},
    {"name":"James", "email":"james.bond@gmail.com", "age":25},
    {"name":"Bart", "email":"bart@gmail.com", "age":12},
]}

export default function ex1() {

    // TODO
    const nbEmployees =  data.employees.length;
    const totalAge =   data.employees.reduce((x,y) => x + y.age, 0);

    console.log("Average", totalAge / nbEmployees);
}