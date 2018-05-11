$(function () {


    $("#charId").on("click", function(event){
        $(this).addClass(chosenChar)
    })

    //onclick event for char-select.handlebars, avatar is going to be an ID that relates to an Avatar table maybe?
    $('#char-create').on('click', function (event) {
        var custInfo = {
            name: $('#char-name').val().trim(),
            charImg: $(".chosenChar").attr("data-href")
        }

        $.ajax('/api/character', {
            type: 'POST',
            data: custInfo
        }).then(
            function () {
                console.log('Created a new character')
                //take us to the ship selection screen
                location.assign('/shipselect');
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

