function initializeInfo() {
    $('#currentDay').text(moment().format("MMM Do YY"))
    let currentTime =  moment().hours()
    for (let i = 9; i <= 17; i++) {
        let storedEntry = localStorage.getItem(i)
        $('#' + i + '-userplan').val(storedEntry)
        console.log(storedEntry)
        if( currentTime > i ){
            $('#' + i + '-userplan').addClass('past') 
        }else if (currentTime == i) {
            $('#' + i + '-userplan').addClass('present')
        }else {
            $('#' + i + '-userplan').addClass('future')
        }
    }
}

$('.btn').on("click",function(){
    var timeBlock = $(this).attr('id').split('-')[0]
    var userInput = $('#' + timeBlock + '-userplan').val()
    console.log(timeBlock);
    console.log(userInput);
    localStorage.setItem(timeBlock, userInput)
})

initializeInfo();