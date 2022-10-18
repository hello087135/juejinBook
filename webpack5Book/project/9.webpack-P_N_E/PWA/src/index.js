console.log('我的第一个PWA应用程序');
navigator.serviceWorker.register('./service-worker.js', {scope: './'}).then(aa => {
    console.log(aa);
}).catch(err => {
    console.log(err);
});