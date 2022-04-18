function getBaseInfo() {
    for (let i = 9; i < 17; i++) {
        let storedEntry = localStorage.getItem(i)
        $('#' + i + '-userplan').val(storedEntry)
        console.log(storedEntry)
    }
}

$('.btn').on("click",function(){
    var timeBlock = $(this).attr('id').split('-')[0]
    var userInput = $('#' + timeBlock + '-userplan').val()
    console.log(timeBlock);
    console.log(userInput);
    localStorage.setItem(timeBlock, userInput)
})

getBaseInfo();