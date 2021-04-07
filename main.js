let player1 = {
    name:'Sub Zero',
    hp:70,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['axe', 'sword', 'ice-arrow'],
    attack(){
        console.log(this.name+' Fight...')
    }
}

let player2 = {
    name:'Sonya',
    hp:20,
    img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon:['bow', 'fireball'],
    attack(){
        console.log(this.name+' Fight...')
    }
}


function createPlayer(playerNum, playerObj){
    let $arenas = document.querySelector('.arenas')
    $arenas.classList.add('arenas')

    let $player = document.createElement('div')
    $player.classList.add(playerNum)

    let $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')

    let $character = document.createElement('div')
    $character.classList.add('character')

    let $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = `${playerObj.hp}%`


    let $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = playerObj.name

    let $img = document.createElement('img')
    $img.src = playerObj.img


    $arenas.appendChild($player)

    $player.appendChild($progressbar)
    $player.appendChild($character)
    
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    $character.appendChild($img)
}

createPlayer('player1', player1)
createPlayer('player2', player2)


