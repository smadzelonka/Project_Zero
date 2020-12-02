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
    }else if($target.hasClass("love")){
        console.log("i need love")
    }else if($target.hasClass("feed")){
        console.log("why cant you make a sandwhich")
    }else {
        console.log("that just happened")
    }
}


/* ===event listener=== */
$(".nes-btn").on("click",handleClick);
// used nes-btn over attetion class



// var textValue = $("input[type=text]").val()


    $('.input').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        // var data = $(".input").val()
        const inputValue = $(".nes-input").val()
        console.log(inputValue); //use the console for debugging, F12 in Chrome, not alerts
    });

// buttons to change inputs
// submit to change name
// decay of health

// add anmations end game