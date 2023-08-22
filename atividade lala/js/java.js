function base(){

    fetch( 'https://api.spoonacular.com/recipes/')
    .then(data => {
        return data.json();
    })
    .then(spoon => {
        console.log(spoon);
    })
}