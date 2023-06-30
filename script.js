/*
let arr = [];
fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => {arr = json.products;
    console.log(arr);

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index].title;
        console.log(element); 
    }
})
*/
// завдання 1-3
const body = document.querySelector("body");
let array = [];

fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => {array = json.products;
    for (let i = 0; i < array.length; i++) {
        if (array[i].price > 40){
            console.log(array[i].title );

            const par = document.createElement("p");
            par.textContent = array[i].title + " - " + array[i].price ; 
            body.appendChild(par);
        }
    } 
})





            