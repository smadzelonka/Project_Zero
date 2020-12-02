// 1. create four progress bars with descripts in the nav
//     1. Health, Hunger, Thirst, emotion
//         1. health shall decay based on time
//         2. hunger shall decay feeding should decay thirst
//         3. thirst shall decay and drinking decay emotion
//             1. Hunger Thirst and emotion shell give a point to health at 100 win condition will be met and animation will destory world
// 2. create a prompt alert to be able to gather name of animation
//     1. display name of animation in header center replacing the tomagtchi name
// 3. 

{/* <div class="nes-field">
  <label for="name_field">Your name</label>
  <input type="text" id="name_field" class="nes-input">
</div> */}

/* Use jquery to create an input for name*/
$("#nameId").on("click",function(event){
    $(".nes-field").attr("id", "nameIdDiv")
});
$(".nes-btn ").on("click",function(event){
    console.log("Ive been clicked");
});



// const name = function askName(){
//     $("section").prepend(`<div class="nes-field input">
//     <label for="name_field">Your Pet's name</label>
//     <input type="text" id="name_field" class="nes-input">
// <a class="nes-btn" href="#">Submit</a></div>`)
// } 
// $("body").ready(name)
// // working on
// $("#hide").click(function(){
//     $(".input").hide();
// });