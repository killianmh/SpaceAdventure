$(function () {

<<<<<<< HEAD

    $("#charId").on("click", function (event) {
        alert("clicked!")
        $(this).addClass("chosenChar")
=======
    //handles selection of character avatar
    $(".charId").on("click", function (event) {
        // alert("clicked!");
        $(this).children('img').addClass('chosenChar');
        // $(this).addClass("chosenChar")
>>>>>>> 4ed656e0eb52356654979cae511259062074c292
    })

    //onclick event for char-select.handlebars
    $('#char-create').on('click', function (event) {

        event.preventDefault();

        var custInfo = {
            name: $('#char-name').val().trim(),
            charImg: $(".chosenChar").attr("src")
        }

        $.ajax('/api/character', {
            type: 'POST',
            data: custInfo
        }).then(
            function () {
                console.log('Created a new character');
                //take us to the ship selection screen
                location.assign('/shipselect');
            }
            )
    });

    //handles selection of ship image
    $(".shipId").on("click", function (even) {
        $(this).children('img').addClass('chosenShip');
    });

    //event for ship-selection
    $('#ship-create').on('click', function (event) {
        event.preventDefault();

        var shipInfo = {
            shipImg: $(".chosenShip").attr("src")
        }

        $.ajax('/api/spaceship', {
            type: 'POST',
            data: shipInfo
        }).then(
            function () {
                console.log('Created a new Ship!');
                location.assign('/game');
            }
        )
    });

    //This is RJ's javascript that handles our beautiful landing page
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const container = document.querySelector('.container');

    left.addEventListener('mouseenter', () => {
        container.classList.add('hover-left');
    });

    left.addEventListener('mouseleave', () => {
        container.classList.remove('hover-left');
    });

    right.addEventListener('mouseenter', () => {
        container.classList.add('hover-right');
    });

    right.addEventListener('mouseleave', () => {
        container.classList.remove('hover-right');
    });

})


