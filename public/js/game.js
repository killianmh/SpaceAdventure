$(function () {

    //counter increased after each choice
    //this doesn't take into account the two different options for some game stages
    var gameStage = 0;

    //each button can have a data-route that corresponds with an extension on the game route 
    $('.gameChoice').on('click', function (event) {
        // var charId = user.id;
        console.log('test');
        //stage 1:
        if ($(this).attr('data-stage') == "1") {
            $.ajax('/api/character', {
                type: 'PUT'
            }).then(
                function () {
                    location.assign("result1");
                }
            )
        }

        if ($(this).attr('data-stage') == "2") {
            $.ajax('/api/character', {
                type: 'PUT'
            }).then(
                function () {
                    location.assign("stage2");
                }
            )
        }

        if ($(this).attr('data-stage') == "3") {
            $.ajax('/api/character', {
                type: 'PUT'
            }).then(
                function () {
                    location.assign("stage3");
                }
            )
        }

        if ($(this).attr('data-stage') == "4") {
            $.ajax('/api/character', {
                type: 'PUT'
            }).then(
                function () {
                    location.assign("result2");
                }
            )
        }

        if ($(this).attr('data-stage') == "5") {
            $.ajax('/api/character', {
                type: 'PUT'
            }).then(
                function () {
                    location.assign("result3");
                }
            )
        }

        if ($(this).attr('data-stage') == "6") {
            $.ajax('/api/character', {
                type: 'PUT'
            }).then(
                function () {
                    location.assign("stage4");
                }
            )
        }

        if ($(this).attr('data-stage') == "7") {
            $.ajax('/api/character', {
                type: 'PUT'
            }).then(
                function () {
                    location.assign("asteroid");
                }
            )
        }
    });

    //*******************************

    //handles selection of character avatar
    $(".charId").on("click", function (event) {
        // alert("clicked!");
        $(this).children('img').addClass('chosenChar');
        // $(this).addClass("chosenChar")
    });

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
        );
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
        );
    });

    //Restart onclick function:
    $(".restart").on("click", function (even) {
        $.ajax('/api/restart', {
            type: 'DELETE'
        }).then(function () {
            location.assign('/characterselect');
        })

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

});


