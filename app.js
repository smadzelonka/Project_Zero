// 1. create four progress bars with descripts in the nav
//     1. Health, Hunger, Thirst, emotion
//         1. health shall decay based on time
//         2. hunger shall decay feeding should decay thirst
//         3. thirst shall decay and drinking decay emotion
//             1. Hunger Thirst and emotion shell give a point to health at 100 win condition will be met and animation will destory world
// 2. create a prompt alert to be able to gather name of animation
//     1. display name of animation in header center replacing the tomagtchi name
// 3. 


/* functions */
const handleClick = function handleClick(event){
    const $target = $(event.target)
    if($target.hasClass("submit")){
        $(".nes-field").attr("id", "nameIdDiv")
    }else if ($target.hasClass("attetion liquid")){
        console.log("Water please")
    }else if($target.hasClass("attetion love")){
        console.log("i need love")
    }else if($target.hasClass("attetion feed")){
        console.log("why cant you make a snadwhich")
    }else {
        console.log("that just happened")
    }
}

/* Use jquery to create an input for name*/
// $("#nameId").on("click",function(event){
//     $(".nes-field").attr("id", "nameIdDiv")
// });

/* event listener */
$(".nes-btn").on("click",handleClick);
// used nes-btn over attetion class


