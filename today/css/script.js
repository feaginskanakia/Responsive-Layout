$(document).ready(function(){
   
    var numRows=3;
    var numColumns=4;
    for(var i=0; i< numRows; i++){
        var $row=$("<div class='row'></div>");
        for(var j=0; j< numColumns; j++){
            var $c=$("<div class='column'></div>");
            $row.append($c);
        }
        
        $("body").append($row);
    }
});
    
