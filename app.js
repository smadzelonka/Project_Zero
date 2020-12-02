// 1. create four progress bars with descripts in the nav
//     1. Health, Hunger, Thirst, emotion
//         1. health shall decay based on time
//         2. hunger shall decay feeding should decay thirst
//         3. thirst shall decay and drinking decay emotion
//             1. Hunger Thirst and emotion shell give a point to health at 100 win condition will be met and animation will destory world
// 2. create a prompt alert to be able to gather name of animation
//     1. display name of animation in header center replacing the tomagtchi name
// 3. 


/* ===functions=== */
const handleClick = function handleClick(event){
    const $target = $(event.target)
    if($target.hasClass("submit")){
        $(".nes-field").attr("id", "nameIdDiv")
        console.log("You've been submited")
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
    let foodValue = $("#foodBar").val();
    let newFoodValue = Number(foodValue) + 5;
    $("#foodBar").val(newFoodValue);
}
const thirstButton = function thirstButton(){
    let thirstValue = $("#drinkBar").val();
    let newThirstValue = Number(thirstValue) + 5;
    $("#drinkBar").val(newThirstValue);
}

const emotionButton = function emotionButton(){
    let emotionalValue = $(".emotionalBar").val();
    let newEmotionalValue = Number(emotionalValue) + 5;
    $(".emotionalBar").val(newEmotionalValue);
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

// buttons to change inputs-
// submit to change name-



// decay of health
/* let time = 30;
const setTimer = function setTimer(){

const updateTime = function updateTime() {
console.log("Timer!", time);
$("#timer").text(`Timer: ${time}s`)
time--;
    if(time <= 0){
        clearInterval(timer);
        round++
        $("#round").text(`Round: ${round}`)
        if (round <= 4) setUpRound()
    }
}
const timer = setInterval(updateTime, 1000)
} */

// add anmations end game