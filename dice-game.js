function rollDice() {
    let goldCoins = 0;

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(roll);
        alert('You roll a ' + roll + '.');

        if(roll === 1) {
            alert('Game over, no more rolls');
            break;
        }
        if(roll < 4) {
            continue;
        }
        if(roll === 4) {
            if(goldCoins > 1) {
                goldCoins --;
                alert(' I\'m sorry you lost 1 coin.\n\n' + 'You have left ' + goldCoins + ' gold coins.');
            }
            continue;
        }
        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins.\n\n' + 'You have won a total of ' + goldCoins + ' gold coins!');
    } 
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}    
