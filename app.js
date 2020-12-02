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
        decayTime()
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


const feedButton = function feedButton(){
/*     let foodValue = $("#foodBar").val();
    let newFoodValue = Number(foodValue) + 5;
    $("#foodBar").val(newFoodValue); */
    pet.hunger += 5;
    $hunger.val(pet.hunger)
    pet.emotion -= .5;
    $emotion.val(pet.emotion)
    pet.thirst -= .1;
    $thirst.val(pet.thirst)
}
const thirstButton = function thirstButton(){
/*     let thirstValue = $("#drinkBar").val();
    let newThirstValue = Number(thirstValue) + 5;
    $("#drinkBar").val(newThirstValue); */
    pet.thirst += 5;
    $thirst.val(pet.thirst)
    pet.emotion -= .1;
    $emotion.val(pet.emotion)
    pet.hunger -= .5;
    $hunger.val(pet.hunger)
}

const emotionButton = function emotionButton(){
/*     let emotionalValue = $(".emotionalBar").val();
    let newEmotionalValue = Number(emotionalValue) + 5;
    $(".emotionalBar").val(newEmotionalValue); */
    pet.emotion += 5;
    $emotion.val(pet.emotion)
    pet.thirst -= .5;
    $thirst.val(pet.thirst)
    pet.hunger -= 1;
    $hunger.val(pet.hunger)
}

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



// decay of health
const decayTime = function decayTime(){
    let HealthTimer = setInterval(() => {
        pet.health++
        $health.val(pet.health)

        if (pet.health >= 100) {
        clearInterval(HealthTimer);
        console.log("game over");
        }
    }, 1000);
}


// add anmations end game