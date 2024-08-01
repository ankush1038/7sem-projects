document.addEventListener('DOMContentLoaded', function() {
let marioHealth = 0;

function updateHealthBar(){
    const healthBar = document.getElementById('health');
    const healthText = document.getElementById('health-text');

    healthBar.style.width = marioHealth + "%";
    healthText.textContent = marioHealth + "%";

    if(marioHealth > 90){
        healthBar.style.backgroundColor = '#4caf50';
    } else if( marioHealth > 70){
        healthBar.style.backgroundColor = '#ffc1c7';
    } else if( marioHealth > 50){
        healthBar.style.backgroundColor = '#ff6607';
    } else if(marioHealth > 30){
        healthBar.style.backgroundColor = '#ffe107';
    } else{
        healthBar.style.backgroundColor = '#f44336';
    }
}

document.getElementById('apple').addEventListener('click', function() {
    if(marioHealth < 100){
        marioHealth += 10;
        if(marioHealth > 100){
            marioHealth =100;
        }
        updateHealthBar();
    }
})

document.getElementById('hammer').addEventListener('click',function(){
    if(marioHealth > 0){
        marioHealth -= 10;
        if(marioHealth < 0){
            marioHealth = 0;
        }
        updateHealthBar();
    }
})

updateHealthBar();
})