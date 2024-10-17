//title: Nafisa_clicker
let count = 0;

function increment(){
    count++;
    console.log(count);
    document.getElementById("count-el").innerText = count;
}

function save(){
    let entries = document.getElementById("entries");
    entries.innerHTML = entries.innerHTML + " " + count + " -";
}
