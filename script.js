//Get to DOM elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//loop through each option image element
optionImages.forEach((image,index) => {
    image.addEventListener("click", () => {
        image.classList.add(".active");

        userResult.src = cpuResult.src = "rock.png";
        result.textContent = "Wait..."

        //loop through each option image again
        optionImages.forEach((image2,index2) => {
            //if the current index doesn't match the clicked index
            //remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");   
        });

        gameContainer.classList.add("start");

        //set a timeout to delay the result calculation 
        let time = setTimeout(() => {
        gameContainer.classList.remove("start");


        //get the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        userResult = imageSrc;

        //generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() = 3);
       //create an array of CPU image options
       let cpuImages = ["rock.png","paper.png","scissors.png"];
       cpuResult.src = cpuImages[randomNumber];

       //assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
       let cpuValue = ["R","P","S"][randomNumber]

       //assign a letter to the clicked option (based on index)
       let userValue = ["R","P","S"][index];

       //create an object with all possible outcomes
       let outcomes = {
           RR:"Draw",
           RP:"Cpu",
           RS:"User",
           PP:"Draw",
           PR:"User",
           PS:"User",
           SS:"Draw",
           SR:"Cpu",
           SP:"User",
       };

       //look up the outcome value based on user and cpu options
       let outComeValue = outcomes[userValue + cpuValue]

       //display the result
       result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;

       console.log(outComeValue);
},2500);
});
});

