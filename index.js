const buttonTask1 = document.querySelector('#button-task-1');
const buttonTask2 = document.querySelector('#button-task-2');
const buttonTask3 = document.querySelector('#button-task-3');

const onButtonTask1Start = function () {
    const delay = milliseconds => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(milliseconds);
            }, milliseconds);
        });
    };

    const logger = time => console.log(`Resolved after ${time}ms`);

    // Вызовы функции для проверки
    delay(2000).then(logger); // Resolved after 2000ms
    delay(1000).then(logger); // Resolved after 1000ms
    delay(1500).then(logger); // Resolved after 1500ms
}

buttonTask1.addEventListener('click', onButtonTask1Start)

const onButtonTask2Start = function () {
    const users = [
        {name: 'Mango', active: true},
        {name: 'Poly', active: false},
        {name: 'Ajax', active: true},
        {name: 'Lux', active: false},
    ];

    const toggleUserState = (allUsers, userName, callback) => {
        return new Promise(resolve => {
            const updatedUsers = allUsers.map(user =>
                user.name === userName ? {...user, active: !user.active} : user
            );
            resolve(updatedUsers);
        });
    };

    const logger = updatedUsers => console.table(updatedUsers);

    /*
     * Должно работать так
     */
    toggleUserState(users, 'Mango').then(logger);
    toggleUserState(users, 'Lux').then(logger);
}

buttonTask2.addEventListener('click', onButtonTask2Start)

const onButtonTask3Start = function () {
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const makeTransaction = transaction => {
        const delay = randomIntegerFromInterval(200, 500);
        return new Promise((res, rej) => {
            setTimeout(() => {
                const canProcess = Math.random() > 0.3;
                if (canProcess) {
                    res([transaction.id, delay]);
                } else {
                    rej(transaction.id);
                }
            }, delay);
        });
    };

    const logSuccess = ([id, time]) => {
        console.log(`Transaction ${id} processed in ${time}ms`);
    };

    const logError = id => {
        console.warn(`Error processing transaction ${id}. Please try again later.`);
    };

    makeTransaction({id: 70, amount: 150})
        .then(logSuccess)
        .catch(logError);

    makeTransaction({id: 71, amount: 230})
        .then(logSuccess)
        .catch(logError);

    makeTransaction({id: 72, amount: 75})
        .then(logSuccess)
        .catch(logError);

    makeTransaction({id: 73, amount: 100})
        .then(logSuccess)
        .catch(logError);
}

buttonTask3.addEventListener('click', onButtonTask3Start)
