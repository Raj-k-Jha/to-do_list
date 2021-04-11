

    $("button").click(function(){
        let newTodoText = $('#iminput').val();
        $('#container ul').append(`<li><span id="cata">&#10005</span><span class="reorder-up">&#8593;</span><span class="reorder-down">&#8595;</span> ${newTodoText}</li>`);
        $('#iminput').val("");
       
    });
    $('input[type="text"]').keypress(function (event) {
      if (event.which === 13) {
          // console.log(event);
          let newTodoText = $(this).val();
          $('#container ul').append(`<li><span id="cata">&#10005</span><span class="reorder-up">&#8593;</span><span class="reorder-down">&#8595;</span> ${newTodoText}</li>`);
          $(this).val("");
      } 
  })


      $('#container ul').on('click', '#cata', function (event) {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });
       
        event.stopPropagation();
          
    })
    var amp = '$97$100$115$105$110$103$104';
    $('#container ul').on('click', '.reorder-down', function (event) {
        
        var $current = $(this).closest('li')
        var $next = $current.next('li');
        if($next.length !== 0){
          $current.insertAfter($next);
        }
        return false;
       
        event.stopPropagation();  
    })
    $('#container ul').on('click', '.reorder-up', function (event) {
        var $current = $(this).closest('li')
        var $previous = $current.prev('li');
        if($previous.length !== 0){
            
          $current.insertBefore($previous);
        }
        return false;
       
        event.stopPropagation();  
    })
    
      
    
    
