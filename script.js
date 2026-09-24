
function startWorkout() {

    showMessage("Your workout is starting! 💪");

}



function showMessage(text) {

    const message =
        document.getElementById("message");

    if (!message) {

        console.error("Message element not found.");

        return;
    }


    message.textContent = text;

    message.classList.add("show");


    setTimeout(function () {

        message.classList.remove("show");

    }, 2500);

}




const habits =
    document.querySelectorAll(
        ".habit-box input"
    );


habits.forEach(function (habit) {

    habit.addEventListener(
        "change",
        function () {

            let completed = 0;


            habits.forEach(function (item) {

                if (item.checked) {

                    completed++;

                }

            });


            showMessage(
                completed +
                "/" +
                habits.length +
                " healthy habits completed!"
            );

        }
    );

});




const fitnessData = {

    project: "Fitness 360",

    steps: 8452,

    calories: 620,

    workouts: 4,

    targetWorkouts: 5,

    fitnessGoal: 78

};



const jsonData =
    JSON.stringify(
        fitnessData,
        null,
        2
    );



console.log("Fitness 360 Data:");

console.log(jsonData);
