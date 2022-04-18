$('.btn').on("click",function(){
    var timeBlock = $(this).attr('id').split('-')[0]
    var userInput = $('#' + timeBlock + '-userplan').val()
    console.log(timeBlock);
    console.log(userInput);
})