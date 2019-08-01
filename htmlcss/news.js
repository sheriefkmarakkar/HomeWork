$(document).ready(function(){
    
    

     
   
    $.ajax({
        type:"GET",
        url:"https://newsapi.org/v2/top-headlines?country=in&apiKey=e30a3e5c75134053815aded41d3e17bd",
        success:function(data){
            console.log(data);
            
           var result="";
          
            for(var i in data['articles'])
            {
           
             var out="<div class='card border-primary mb-3' style='max-width: 1040px;'><div class='row no-gutters'><div class='col-md-4'><img src="+data['articles'][i].urlToImage+" class='card-img' alt='...'></div><div class='col-md-8'><div class='card-body'><div class='card-header'>"+data['articles'][i].title+"</div><div class='card-body'><strong><p class='card-text'>Auther :"+data['articles'][i].content+"</p></strong><p class='card-text'><small class='text-muted'>Published At :"+data['articles'][i].publishedAt+"</small></p></div></div></div></div></div>";
            result+=out; 
         }
        
       
         $("#did").html(result);
         
          
            
            
        }
    });

 
});