$(document).ready(function () {


    $('.form').on('submit', (e) => {
        e.preventDefault()

        let inputValue = $('.form-input').val()
        let li = `<li class="list-li"> ${inputValue}</li>`

        $(li).appendTo('ul')

        $(document).on('click', 'li', function() {

            $(this).css('textDecoration', 'line-through')
            // $('li').toggleClass('strike')
              
          })

         

    })

})