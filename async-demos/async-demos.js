(() => {
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result =  x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`)
        var result = addSync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(() => {
            const result =  x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        },3000)
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result =  x + y;
                console.log(`   [@service] returning result`);
                resolve(result);
            },3000)
        })
    }

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`)
        var p = addAsyncPromise(x,y);
        p.then(result => {
            console.log(`[@client] result = ${result}`)
        })
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`)
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`)
        console.log('Job done!');
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;


})()