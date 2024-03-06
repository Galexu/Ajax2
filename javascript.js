$(document).ready(function () {
    $(".abc").css({
        // "width": "100px",
        "height": "500px",
        "border": "2px solid black"
    });

    const Api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    fetch(Api)
        .then((response) => response.json())
        .then(data => mostrarCockteles(data));

    function mostrarCockteles(e) {
        console.log(e.drinks);
        e.drinks.forEach(e => {
            $(".abc").append(`<div class="card" style="width: 18rem;">
                    <img src="${e.strDrinkThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.strDrink}</h5>
                            <p class="card-text">${e.strInstructionsES
                }</p>
                            <a href="#" class="btn btn-primary">Añadir al carrito</a>
                        </div>
                </div>`);
        });
    }

    // $.ajax({
    //     url: Api,
    //     method: "POST",
    //     dataType: "json",
    //     success: function (cockteles) {
    //         console.log(cockteles.drinks);
    //         cockteles.drinks.forEach(e => {
    //             $(".abc").append(`<div class="card" style="width: 18rem;">
    //                         <img src="${e.strDrinkThumb}" class="card-img-top" alt="...">
    //                             <div class="card-body">
    //                                 <h5 class="card-title">${e.strDrink}</h5>
    //                                 <p class="card-text">${e.strInstructionsES
    //                 }</p>
    //                                 <a href="#" class="btn btn-primary">Añadir al carrito</a>
    //                             </div>
    //                        </div>`);
    //         });
    //     },
    // });


});

const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
const color = `rgb(${red}, ${green}, ${blue})`;
$("*").css("background-color", color);