// 1. create four progress bars with descripts in the nav
//     1. Health, Hunger, Thirst, emotion
//         1. health shall decay based on time
//         2. hunger shall decay feeding should decay thirst
//         3. thirst shall decay and drinking decay emotion
//             1. Hunger Thirst and emotion shell give a point to health at 100 win condition will be met and animation will destory world
// 2. create a prompt alert to be able to gather name of animation
//     1. display name of animation in header center replacing the tomagtchi name
// 3. 

// values
const $health = $("#healthBar")
const $hunger = $("#foodBar")
const $thirst = $("#drinkBar")
const $emotion = $(".emotionalBar")

// pet
const pet = {
    "health": $health.val(),
    "hunger": $hunger.val(),
    "thirst": $thirst.val(),
    "emotion": $emotion.val(),
}


/* ===functions=== */
const handleClick = function handleClick(event){
    const $target = $(event.target)
    if($target.hasClass("submit")){
        $(".nes-field").attr("id", "nameIdDiv")
        console.log("You've been submited")
        $(".health, .hunger, .thirst, .emotion, .image_Container, .bottom").removeClass("hidden")
        gameTime()
    }else if ($target.hasClass("liquid")){
        console.log("Water please")
        thirstButton()
    }else if($target.hasClass("love")){
        console.log("i need love")
        emotionButton() 
    }else if($target.hasClass("feed")){
        console.log("why cant you make a sandwhich")
        feedButton()
    }else {
        console.log("that just happened")
    }
}

const handleKeys = function handleKeys(e){
    var key = (e.key)
    console.log(e)
    if(key === "f"){
        feedButton()
    }else if(key === "l"){
        thirstButton()
    }else if(key === "e"){
        emotionButton()
    }else{
        console.log("hello there you pressed me one to many times")
    }
}


const foodDecay = function foodDecay(){
    pet.hunger += 1.5;
    $hunger.val(pet.hunger)
}
const thirstDecay = function thirstDecay(){
    pet.thirst += 1.5;
    $thirst.val(pet.thirst)
}
const emotionDecay = function emotionalDecay(){
    pet.emotion += 1.5;
    $emotion.val(pet.emotion)
}

const feedButton = function feedButton(){
/*     let foodValue = $("#foodBar").val();
    let newFoodValue = Number(foodValue) + 5;
    $("#foodBar").val(newFoodValue); */
    pet.hunger -= 5;
    $hunger.val(pet.hunger)
}
const thirstButton = function thirstButton(){
/*     let thirstValue = $("#drinkBar").val();
    let newThirstValue = Number(thirstValue) + 5;
    $("#drinkBar").val(newThirstValue); */
    pet.thirst -= 5;
    $thirst.val(pet.thirst)
}

const emotionButton = function emotionButton(){
/*     let emotionalValue = $(".emotionalBar").val();
    let newEmotionalValue = Number(emotionalValue) + 5;
    $(".emotionalBar").val(newEmotionalValue); */
    pet.emotion -= 5;
    $emotion.val(pet.emotion)
}
/* get user name */
const handleSubmit =function handleSubmit(e){
    e.preventDefault();
    const inputValue = $(".nes-input").val()
    $("h1").text(inputValue)
    console.log(inputValue);
}

/* ===event listener=== */
$(".nes-btn").on("click",handleClick);
// need to move submit from handleclick
$('.input').on('submit', handleSubmit);
// handlesKey
$('body').on( "keydown", handleKeys )


// decay of health
const gameTime = function gameTime(){
    let HealthTimer = setInterval(() => {
        pet.health++
        gameDecay()

        if(pet.thirst === 25 || pet.hunger === 25 || pet.emotion === 25){
        earlyGame()
        }
        if(pet.thirst === 50 || pet.hunger === 50 || pet.emotion === 50){
        midGame()
        }
        if(pet.thirst === 100 || pet.hunger === 100 || pet.emotion === 100){
        endGame()
        $("section").append(`<img class='endGame' src='images/gameover.gif'>`)
        clearInterval(HealthTimer);
        }
        $health.val(pet.health)
        if (pet.health >= 100) {
        clearInterval(HealthTimer);
        $("img").attr("src", "images/ gothicvania patreon collection/demon-Files/GIFS/demon-attack.gif")
        $("section").append(`<img class='endGame' id="win" src='images/winText.png'>`)
        $("img").removeClass("anima")
        }
    }, 400);
}


// add anmations game

const earlyGame = function earlyGame(){
$("img").attr("src", "images/ gothicvania patreon collection/Hell-Beast-Files/GIF/with-stroke/hell-beast-idle.gif")
$("img").removeClass("egg")
}

const midGame = function midGame(){
$("img").attr("src", "images/ gothicvania patreon collection/Hell-Beast-Files/GIF/with-stroke/hell-beast-breath.gif")
}

const endGame = function endGame(){
    $("img").attr("src", "images/ gothicvania patreon collection/Hell-Beast-Files/GIF/without-stroke/hell-beast-burn.gif") 
    console.log("game over"); 
    $("img").removeClass("anima")
}

const gameDecay = function gameDecay(){
    foodDecay();
    emotionDecay();
    thirstDecay();
}

// global runs
