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

    function batchAddAsyncPromiseClient(){
        const start = new Date()
        console.log(`[@client] triggering the service`)
        const p1 = addAsyncPromise(10,20);
        p1.then(function(result){
            console.log(`[@client] result = ${result}`)
        });

        console.log(`[@client] triggering the service`)
        const p2 =  addAsyncPromise(100,200);
        p2.then(function(result){
            console.log(`[@client] result = ${result}`)
        });
        
        Promise.all([p1, p2])
            .then(() => {
                console.log('Time taken = ', (new Date()) - start);
            });
    }

    window['batchAddAsyncPromiseClient'] = batchAddAsyncPromiseClient;

})()