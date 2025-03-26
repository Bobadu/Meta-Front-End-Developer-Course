const age = 10;

if (age >= 65) {
    console.log("Otrzymujesz dochód z emerytury");
} else if (age < 65 && age >= 18) {
    console.log("Co miesiąc otrzymujesz pensję");
} else if (age < 18) {
    console.log("Otrzymujesz zasiłek");
} else {
    console.log("Wartość zmiennej age nie jest liczbowa");
}

const day = "Sunday";

switch(day) {
    case "Monday":
        console.log("Start work week, attend team meeting");
        break;
    case "Tuesday":
        console.log("Work on project tasks");
        break;
    case "Wednesday":
        console.log("Mid-week review session");
        break;
    case "Thursday":
        console.log("Complete pending tasks");
        break;
    case "Friday":
        console.log("Submit weekly report, end of work week");
        break;
    case "Saturday":
        console.log("Relax and enjoy weekend");
        break;
    case "Sunday":
        console.log("Rest and prepare for next week");
        break;
    default:
        console.log("There is no such day");
}