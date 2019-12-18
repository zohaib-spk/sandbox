var timer = function (timer) {
    return new Promise(function (resolve, reject) {
        console.log('processing');
        setTimeout(function () {
            console.log('timeout done');
            reject();
        }, timer);
    });
};

timer(2000).then(() => alert('done')).catch(() => alert('failed'));
