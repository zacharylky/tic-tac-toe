console.log('hello')
var player = 'X'
var hasGameCompleted = false
//1. listen for clicks on a square
$('.board').click(function(event){
    console.log('bye')
    if($(event.target).text() === "" && !hasGameCompleted) {
    //2. Place an X on the square where the user clicked
    $(event.target).text(player)
    checkWins()
    switchPlayer()
    }
    
})

function switchPlayer(){
    //3. Next click changes to 'O'
    if (player === 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}

function checkWins(){
    if ($('.board div').eq(0).text() === player
        && $('.board div').eq(1).text() === player
        && $('.board div').eq(2).text() === player){
        $('.output').text(player + ' has won!')
        hasGameCompleted = true
        } else if (
        $('.board div').eq(3).text() === player
        && $('.board div').eq(4).text() === player
        && $('.board div').eq(5).text() === player){
        $('.output').text(player + ' has won!')
        hasGameCompleted = true
        } else if (
        $('.board div').eq(6).text() === player
        && $('.board div').eq(7).text() === player
        && $('.board div').eq(8).text() === player){
        $('.output').text(player + ' has won!')
        hasGameCompleted = true
        } else if (
        $('.board div').eq(0).text() === player
        && $('.board div').eq(3).text() === player
        && $('.board div').eq(6).text() === player){
        $('.output').text(player + ' has won!')
        hasGameCompleted = true
        } else if (
        $('.board div').eq(1).text() === player
        && $('.board div').eq(4).text() === player
        && $('.board div').eq(7).text() === player){
        $('.output').text(player + ' has won!')
        hasGameCompleted = true
        } else if (
        $('.board div').eq(2).text() === player
        && $('.board div').eq(5).text() === player
        && $('.board div').eq(8).text() === player){
        $('.output').text(player + ' has won!')
        hasGameCompleted = true
        } else if (
        $('.board div').eq(0).text() === player
        && $('.board div').eq(4).text() === player
        && $('.board div').eq(8).text() === player){
        $('.output').text(player + ' has won!')
        hasGameCompleted = true
        } else if (
        $('.board div').eq(2).text() === player
        && $('.board div').eq(4).text() === player
        && $('.board div').eq(6).text() === player){
        $('.output').text(player + ' has won!')
        hasGameCompleted = true
        }
}