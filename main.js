const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

let player1 = {
    name:'Sub Zero',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['axe', 'sword', 'ice-arrow'],
    player:1,
    attack(){
        console.log(this.name+' Fight...')
    }
}

let player2 = {
    name:'Sonya',
    hp:120,
    img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon:['bow', 'fireball'],
    player:2,
    attack(){
        console.log(this.name+' Fight...')
    }
}

function createElement(tag, className){
    const $tag = document.createElement(tag)
    if (className){
        $tag.classList.add(className)
    }
    
    return $tag
}


function createPlayer(playerObj){

    let $player = createElement('div', 'player'+playerObj.player)
    
    let $progressbar = createElement('div', 'progressbar')
    
    let $character = createElement('div', 'character')

    let $life = createElement('div', 'life')
    $life.style.width = `${playerObj.hp}%`


    let $name = createElement('div', 'name')
    $name.innerText = playerObj.name

    let $img = createElement('img')
    $img.src = playerObj.img



    $player.appendChild($progressbar)
    $player.appendChild($character)
    
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    $character.appendChild($img)

    return $player
}

function changeHP(player){
    const $playerLife = document.querySelector('.player'+player.player+' .life')


    if (player.hp >0){
        let randValue = Math.ceil(Math.random()*20)
        randValue <= player.hp ? player.hp -= randValue : player.hp = 0
    } else{
        player.hp = 0
    }

    
    $playerLife.style.width = player.hp + '%';
    if (player.hp <= 0){
        player.player == 2 ? $arenas.appendChild(playerWin(player1.name)) : $arenas.appendChild(playerWin(player2.name))
        
    }
    console.log(player.hp)
}


function playerWin(name){
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = name + ' win'
    return $loseTitle
}



$randomButton.addEventListener('click', (e)=>{
    if (player1.hp > 0){
        changeHP(player2)
        changeHP(player1)
        
    } else{
        $randomButton.disabled = true
    }
    
    
})



$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))




//Finish