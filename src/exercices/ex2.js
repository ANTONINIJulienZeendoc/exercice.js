import users from './data/users';

// Filtrer chaque objet du tableau users pour ne garder que ceux dont accountChecked est à true
// Transformer cette liste en une seule chaine de charactère de 'prénom nom' séparé par des points virgules
// Exemple : "Cedrick Osinski;Laila McKenzie;Cecil Breitenberg;..."

export default function ex2() {
    // La variable users est importer depuis src/exercices/data/users.js (n'hésitez pas a y faire un tour si besoin de plus d'information)
    var useraccountChecked = Object.values(users)
    .filter(user =>user.accountChecked === true) // User filtered with the account check
    .map(x => `${x.lastName} ${x.firstName}`);

    console.log(useraccountChecked.join(';'));
}

