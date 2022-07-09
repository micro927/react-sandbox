
function taskOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('One');
            resolve('foo');
        }, 100);
    });
}


function taskTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Two');
            resolve('foo');
        }, 3000);
    });
}


function taskThree() {
    return new Promise((resolve, reject) => {
        if (4 === 4) return reject('444444')
        setTimeout(() => {
            console.log('Three');
            resolve('foo');
        }, 200);
    });
}



async function main() {
    try {

        await taskOne().then((result) => console.log(result));
        await taskTwo();
        await taskThree();
    }
    catch (error) {
        console.warn(error)
    }
}
main();