/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let daily_rate = 35; // full price by default
let total_cost = 0;
let dayCounter = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


/*? Should the small-buttons change their color to blue on hover as well? They are not links... ?*/
const day_selector_monday = document.getElementById("monday");
day_selector_monday.addEventListener("click", switchClassMonday);

const day_selector_tuesday = document.getElementById("tuesday");
day_selector_tuesday.addEventListener("click", switchClassTuesday);

const day_selector_wednesday = document.getElementById("wednesday");
day_selector_wednesday.addEventListener("click", switchClassWednesday);

const day_selector_thursday = document.getElementById("thursday");
day_selector_thursday.addEventListener("click", switchClassThursday);

const day_selector_friday = document.getElementById("friday");
day_selector_friday.addEventListener("click", switchClassFriday);


function switchClassMonday () {
    day_selector_monday.classList.toggle("clicked");
    recalculate();
}

function switchClassTuesday () {
    day_selector_tuesday.classList.toggle("clicked");
    recalculate();
}

function switchClassWednesday () {
    day_selector_wednesday.classList.toggle("clicked");
    recalculate();
}

function switchClassThursday () {
    day_selector_thursday.classList.toggle("clicked");
    recalculate();
}

function switchClassFriday () {
    day_selector_friday.classList.toggle("clicked");
    recalculate();
}


function rentalDuration() {
    dayCounter = 0
    if (day_selector_monday.classList.contains("clicked")) {
        dayCounter += 1;
    }
    if (day_selector_tuesday.classList.contains("clicked")) {
        dayCounter += 1;
    }
    if (day_selector_wednesday.classList.contains("clicked")) {
        dayCounter += 1;
    }
    if (day_selector_thursday.classList.contains("clicked")) {
        dayCounter += 1;
    }
    if (day_selector_friday.classList.contains("clicked")) {
        dayCounter += 1;
    }
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearRental = document.getElementById("clear-button");
clearRental.addEventListener("click", reset);

function reset() {
    total_cost = 0;
    dayCounter = 0;
    rentalCost.innerHTML = total_cost;
    day_selector_monday.classList.remove("clicked");
    day_selector_tuesday.classList.remove("clicked");
    day_selector_wednesday.classList.remove("clicked");
    day_selector_thursday.classList.remove("clicked");
    day_selector_friday.classList.remove("clicked");
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const bookingCategoryHalf = document.getElementById("half");
bookingCategoryHalf.addEventListener("click", calculateHalfDay);

const bookingCategoryFull = document.getElementById("full");
bookingCategoryFull.addEventListener("click", calculateFullDay);

function calculateHalfDay() {
    daily_rate = 20;
    bookingCategoryHalf.classList.add("clicked");
    bookingCategoryFull.classList.remove("clicked");
    recalculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function calculateFullDay() {
    daily_rate = 35;
    bookingCategoryHalf.classList.remove("clicked");
    bookingCategoryFull.classList.add("clicked");
    recalculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const rentalCost = document.getElementById("calculated-cost");

function recalculate() {
    rentalDuration();
    total_cost = dayCounter * daily_rate;
    rentalCost.innerHTML = total_cost;
}