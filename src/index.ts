import fs from 'fs';

// function loadJSONSync(filename: string) {
//     return JSON.parse(fs.readFileSync(filename).toString());
// }

// console.log(loadJSONSync("./src/data.json"));

// try {
//     console.log(loadJSONSync("absent.json"));
// } catch (err) {
//     console.log(`absent.json: ${err}`);
// };

// function loadJSON(filename: string, cb: (error: Error, data?: any) => void){
//     fs.readFile(filename, (err, data) => {
//         if (err) {
//             cb(err);
//         } else {
//             cb(null, JSON.parse(data.toString()));
//         };
//     });
// };

// function loadJSON(filename: string, cb: (error: any, data?: any) => void){
//     fs.readFile(filename, (err, data) => {
//         if (err) return cb(err);
//         try {
//             var parsed = JSON.parse(data.toString());
//         } catch (err) {
//             return cb(err);
//         }
//         return cb(null, parsed);
//     });
// };

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if(a == 2) {
//         resolve("success");
//     } else {
//         reject("failed");
//     };
// });

// p.then((message) => {
//     console.log(`Success! The promise returned ${message}`);
//     return 123;
// }).then((message) => {
//     console.log(message)
//     return 909;
// }).then((message) => {
//     console.log(message)
//     return 10000;
// }).then((message) => {
//     console.log(message)
//     return 23;
// }).catch((error) => {
//     console.log(`Failure! The promise returned ${error}`)
// });

function loadJSON(filename: string, cb: (error: any, data?: any) => void){
    fs.readFile(filename, (err, data) => {
        if (err) return cb(err);
        try {
            var parsed = JSON.parse(data.toString());
        } catch (err) {
            return cb(err);
        }
        return cb(null, parsed);
    });
};

function readFilePromise(filename: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

function loadJSONPromise(filename: string): Promise<any> {
    return readFilePromise(filename)
        .then((res) => {
            return JSON.parse(res);
        })
};

loadJSONPromise("./src/data.json")
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(`data.json: error: ${err}`)
    });

