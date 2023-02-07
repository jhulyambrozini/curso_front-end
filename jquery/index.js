$(document).ready(function () {


    $('.form').on('submit', (e) => {
        e.preventDefault()

        let inputValue = $('.form-input').val()
        let li = `<li class="list-li"> ${inputValue}</li>`
       
        $('ul').append(li)

    })

    $('ul').on('click', () => {

      $('li').css({textDecoration: 'line-through'})
      // $('li').toggleClass('strike')
        
    })

})