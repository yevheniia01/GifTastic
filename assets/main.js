



    /*var count = 0;
    var images = ['../GifTastic/assets/images/whitecat.jpg',
                  '../GifTastic/assets/images/beardeddragon1.jpg',
                  '../GifTastic/assets/images/catsorange.jpg', 
                  '../GifTastic/assets/images/rainbowkitty.jpg',
                  '../GifTastic/assets/images/iguana1.jpg',
                  '../GifTastic/assets/images/dog1.jpg',
                  '../GifTastic/assets/images/chameleon1.jpg',
                  '../GifTastic/assets/images/iguana2.jpg',
                  '../GifTastic/assets/images/dog2.jpg',
                  '../GifTastic/assets/images/beardeddragon2.jpg',
                  '../GifTastic/assets/images/chameleon2.jpg',
                  '../GifTastic/assets/images/beardeddragon3.jpg'];
    var image = $(".fader");
  
    image.css("background-image","url("+images[count]+")");
  
    setInterval(function(){
      image.fadeOut(700, function(){
        image.css("background-image","url("+images[count++]+")");
        image.fadeIn(700);
      });
      if(count == images.length)
      {
        count = 0;
      }
    },40000);
  */




   
   var topics = ['Axolotl', 'Bearded Dragon', 'Snake', 'Cats', 'Dogs', 
                  'Hamsters', 'Flamingos', 'Tigers', 'Iguanas', 'Bears', 'Rats'];
  

var createBtn = function(){
    $('#buttons')
    for(var i = 0; i<topics.length; i++){
        var newBtn = $('<a href="#" class = "btn btn-sm animated-button victoria-one"></a>');
 
         newBtn.attr('data-name',topics[i]);
            newBtn.attr('value', topics[i])
         newBtn.text(topics[i]);
         $('#buttons').append(newBtn);
         console.log(i)
         console.log(newBtn)
    }
}

$('#gifInputBtn').on('click', function(event){
    $('#buttons').empty()

    event.preventDefault();
    var addedBtn = $("#gifInputText").val()
   
     topics.push(addedBtn);
     createBtn()
     $('#removeAddedBtnText').on('click', function(){
       addedBtn.hidden()
     
})


})
createBtn()


function displayGif(){
var gifSearch = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gifSearch+"&api_key=COGiXXultfkA9osXS98VBU5pt56bImum&limit=10"

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response){
    console.log(response)
    var gifResponse = response.data
  
    for (var i=0; i < gifResponse.length; i++){
        //$(".gifDisplayImg").append("<img class= 'newGif' src ='"+gifResponse[i].images.original_still.url+"'/>")
        //var gifDisplay = $('#gifDisplayImg')
        var gifDisplay = $('<div class= gifDisplayText>')
        var onClickGif = $('<img>')
            onClickGif.attr('src', gifResponse[i].images.original_still.url)
            onClickGif.attr('title', "Rating: "+ gifResponse[i].rating)
        //onClickGif.attr('src', gifResponse[i].images.original_still.url)
            onClickGif.attr('data-still', gifResponse[i].images.original_still.url);
            onClickGif.attr('data-state', 'still');
            onClickGif.addClass('gif')
            onClickGif.attr('data-animate', gifResponse[i].images.original.url);
        gifDisplay.append(onClickGif)
        $('#gifDisplayImg').append(gifDisplay)
    }
    
    $('#removeGifsText').on('click', function(){
        $(".gifDisplayText").fadeOut()
    })
   
})
}


$(document).on('click', '.gif', function(){
	var state = $(this).attr('data-state');
		if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
                
            };
            console.log(this)
                   
});
$(document).on('click', '.btn', displayGif)





  



