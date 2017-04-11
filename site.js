// JavaScript File
$('#hideshow').toggle(function(){
    $('#hideshow').text('Show');
},function(){
    $('#hideshow').text('Hide');
});
        
    $("#hideshow").click(function(){
        $("#message").toggle();
       
    });