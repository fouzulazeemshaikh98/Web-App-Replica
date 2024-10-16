// function one() {
//     return 1;
// }

// function two() {
//     const two = one() + one();
//     return two;
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans)
// }
// // three();

// "use strict";
// const h3 = document.querySelector("h3");
// const changeColor = (color, delay, nextColorChange) => {
//     setTimeout(() => {
//         h3.style.color = color;
//         if(nextColorChange) nextColorChange( );
//     }, delay)
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("gray", 1000)
//         })
//     });
// })




// function saveToDb(data, sucess, failure) {
//     let InternetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (InternetSpeed > 4) {
//         sucess();
//     }
//     else {
//         failure();
//     }
// }

// saveToDb("Message 1", () => {
//     console.log("Data_1 saved to database Sucessfully!");
//     saveToDb("Message 2", () => {
//         console.log("Data_2 saved to database Sucessfully!");
//         saveToDb("Message 3", () => {
//             console.log("Data_3 saved to database Sucessfully!");
//         }, () => {
//             console.log("Weak Connection! Data_3 not saved");
//         })
//     }, () => {
//         console.log("Weak Connection! Data_2 not saved");
//     })
// }, () => {
//     console.log("Weak Connection! Data_1 not saved");
// })



// function saveToDb(data) {
//     return new Promise((reslove, reject) => {
//         let InternetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (InternetSpeed > 4) {
//             reslove("Data was saved!")
//         }
//         else {
//             reject("Weak Connection! Data not saved!");
//         }
//     })
// }

// let promt = prompt("Enter message!");

// saveToDb(promt)
//     .then((result) => {
//         console.log(result);
//         promt = prompt("Enter 2 message!");
//         return saveToDb(promt);
//     })
//     .then((result) => {
//         console.log(result)
//         promt = prompt("Enter 3 message!");
//         return saveToDb(promt);
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log("Promise was Rejected!", error)
//     })



// "use strict";
// const h3 = document.querySelector("h3");
// const changeColor = (color, delay, nextColorChange) => {
//     setTimeout(() => {
//         h3.style.color = color;
//         if(nextColorChange) nextColorChange( );
//     }, delay)
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("gray", 1000)
//         })
//     });
// })

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         const h3 = document.querySelector("h3");
//         setTimeout(() => {
//             h3.style.color = color;
//             resolve()
//         }, delay)
//     })
// }
// changeColor("blue", 1000)
//     .then((result) => {
//         console.log("blue color was applied!");
//         console.log("result", result)
//         return changeColor("green", 1000);
//     })
//     .then((result) => {
//         console.log("green color was applied");
//         console.log("result", result)
//         return changeColor("red", 1000);
//     })
//     .then((result) => {
//         console.log("green color was applied");
//         console.log("result", result)
//     })
//     .catch((result) => {
//         console.log("green color was applied");
//     })



// let url = "https://fakestoreapi.com/products";
// async function getReq() {
//     try {
//         let res = await fetch(url)
//         let data = await res.json()
//             .then(data => {
//                 console.log(data)
//             })
//     } catch (e) {
//         console.log("err - ", e);
//     }

// }

// getReq()


const button = document.querySelector("button");
button.addEventListener("click", async () => {
    try {
        let list = document.querySelector("#list");
        list.innerText = "";
        let search = document.querySelector("#search");
        let sear = search.value;
        let url = "http://universities.hipolabs.com/search?name=" + sear;
        let res = await fetch(url);
        let data = await res.json();
        for (let d of data) {
            let li = document.createElement("li");
            li.classList.add("li");
            li.innerHTML = d.name
            list.appendChild(li)
        }

    } catch (er) {
        console.log("error- ", er);
    }
})

