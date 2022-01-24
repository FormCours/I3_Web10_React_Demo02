const FruitList = () => {

    // ↓ Donnée (Format Object JS)
    //   Exemple : Resultat API, Formulaire, Donnée JSON, ...
    const fruits = [
        "Pomme",
        "Poire",
        "Cerise",
        "Fraise",
        "Tomate",
        "Framboise",
        "Banane"
    ];
    console.log(fruits);

    // ↓ Conversion des données vers des composant React
    //   Utilisation de la fonction "map" de Javascript
    const fruitsJSX = fruits.map(fruit => <li key={fruit}>{fruit}</li>);
    console.log(fruitsJSX);
 
    // ↓ Equivalement à la fonction "map", avec la boucle "forEarch"
    /*
    const fruitsJSX2 = [];
    fruits.forEach(fruit => {
        const elementJSX = <li>{fruit}</li>;
        fruitsJSX2.push(elementJSX);
    })
    */


    // ↓ Affichage de la liste de fruit dans le JSX
    return (<>
        <h3>Liste de fruit</h3>
        <ul>
            {fruitsJSX}
        </ul>
    </>);
};

export default FruitList;