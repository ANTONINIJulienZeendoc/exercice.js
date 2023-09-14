// 1) A partir des liens ci-dessous, faire un algo qui récupère via la fonction "fetch" la liste des utilisateurs et la liste des articles
// 2) Filtrer les tâches et ne garder que les id pairs
// 3) Transformer cette liste de taches pour ne renvoyés que le titre (.title) ainsi que le nom d'utilisateur (.username) de chaque todo
// 4) Faire un console.log du résultat

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

export default function ex3() {

    // TODO
    Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json()),
      ]).then(response => {
        const usersPair = response[0].filter(x => x.id % 2 === 0);// Users keep only even identifiers
        const postsPair = response[1].filter(x => x.id % 2 === 0 && x.userId % 2 === 0);// Posts keep only even identifiers

        const result =  postsPair.map(x =>  {
            return {
                "title" :x.title,
                "username": usersPair.filter(user => user.id === x.userId)
                                        .map(y => y.username)[0]
            }
        });

        console.log(result);
      })
}

