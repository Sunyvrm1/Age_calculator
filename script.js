let form = document.getElementById("form")

function age(event) {
    event.preventDefault();
    var d1 = Number(document.getElementById('date').value);
    var m1 = Number(document.getElementById('month').value);
    var y1 = Number(document.getElementById('year').value);
    let dateTrue = false;
    let monthTrue = false;
    let YearTrue = false;
    let dateDiv = document.getElementById('date');

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > 31) {
        dateDiv.parentElement.classList.add("required");
        document.getElementById("date-error").textContent="Must be a valid day";
    }
    else {
        dateTrue = true;
        dateDiv.parentElement.classList.remove("required");
        document.getElementById("date-error").textContent= "";
    }
    if (m1 > 12) {
        let div = document.getElementById('month');
        div.parentElement.classList.add("required");
        document.getElementById("month-error").textContent="Must be a valid month";
    }
    else {
        monthTrue = true;
        let div = document.getElementById('month');
        div.parentElement.classList.remove("required");
        document.getElementById("month-error").textContent="";
    }
    if (y1 > y2) {
        let div = document.getElementById('year');
        div.parentElement.classList.add("required");
        document.getElementById("year-error").textContent="Must be a valid Year";
    } else if (y1 == y2) {
        if (m1 > m2) {
            let div = document.getElementById('month');
            div.parentElement.classList.add("required");
            document.getElementById("year-error").textContent="Must be a valid Year";
            
        } else {
            monthTrue = true;
            let div = document.getElementById('month');
            div.parentElement.classList.remove("required");
            document.getElementById("year-error").textContent="";
        }
    }
    else {
        let div = document.getElementById('year');
        YearTrue = true;
        div.parentElement.classList.remove("required");
        document.getElementById("year-error").textContent="";
    }
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    if (dateTrue == true && monthTrue == true && YearTrue == true) {
        document.getElementById('res_year').innerHTML = y;
        document.getElementById('res_month').innerHTML = m;
        document.getElementById('res_date').innerHTML = d;
    }


}

form.addEventListener("submit", age)






