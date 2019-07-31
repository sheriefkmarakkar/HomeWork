$(document).ready(function(){
    
    

     
   
       $.ajax({
           type:"GET",
           url:"book.json",
           success:function(data){
               console.log(data);
               
              var result="";
              alert("hello");
               for(var i in data['books'])
               {
                  
                var out="<div class='card mb-3' style='max-width: 540px;'><div class='row no-gutters'><div class='col-md-4'><img src='./ba.jpg' class='card-img' alt='...'></div><div class='col-md-8'><div class='card-body'><div class='card-header'>Book Name :"+data['books'][i].bname+"</div><div class='card-body'><strong><p class='card-text'>Auther :"+data['books'][i].auther+"</p></strong><p class='card-text'>Cat :"+data['books'][i].bcat+"</p><p class='card-text'>Discription :"+data['books'][i].bdis+"</p></div></div></div>";
               result+=out; 
            }
           
          
            $("#did").html(result);
            
             
               
               
           }
       });
   
    
});