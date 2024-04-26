// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "Mr.Khalane",
//     () => {
//         console.log("Success: Your data was saved.");
//         savetoDb(
//             "HelloWorld",
//             () => {
//                 console.log("Success2: Your data2 was saved.");
//                 savetoDb(
//                     "HelloWorld2",
//                     () => {
//                         console.log("Success3: Your data3 was saved.");
//                     },
//                     ()=> {
//                         console.log("Failure3: weak connection,data3 not saved");
//                     }
//                 );
//             },
//             ()=> {
//                 console.log("Failure2: weak connection,data2 not saved");
//             }
//         );
//     },
//     ()=> {
//         console.log("Failure: weak connection,data not saved");
//     }
// );

function savetoDb(data,success,failure){
    return new Promise((success,failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            success("Success : Data was saved");
        }else{
            failure("Failure ; weak connection");
        }
    })
}

savetoDb("Mr.Khalane") // req = promise object
.then(()=> {
    console.log("promise was resolved");
    // console.log(request);
})
.catch(() => { 
    console.log("promise was rejected");
    // console.log(request);
});
// savetoDb("Mr.Khalane");