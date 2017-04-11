$(document).ready(function(){
   $("button").on('click',function(){
       $("input").css('border-color', 'initial');
       if($('#name').val().length==0){
          $("#name").css('border-color', 'red');
          //console.log("No Name");
    
       }
        if($('#email').val().length==0){
          $("#email").css('border-color', 'red');
         
    
       }
       console.log($('#email').val());
      if($('#phone').val().length==0){
          $("#phone").css('border-color', 'red');
          //console.log("#phone");
    
       }
       console.log($('#phone').val());
       console.log($("#name").val());
   });
    
});