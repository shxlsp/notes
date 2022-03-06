const fs = require('fs');
const { task } = require('folktale/concurrency/task');
const fp = require('lodash/fp');
const readFile = (pathName) => {
    return task( resolver => {
        fs.readFile( pathName, 'utf-8', ( err, data ) => {
            if ( err ) {
                resolver.reject(err)
                return;
            }
            resolver.resolve(data)
        } )
    } )
}

readFile('../package.json')
//类似管道用法 map  取出version
    // .map( fp.split('\n') )
    // .map( fp.find( data => data.includes('version') ) )
    .map( data => {
        return JSON.parse(data)
    } )
    .map( data => `version: ${data.version}` )

    .run()
    .listen({
        onRejected: err => {
            console.log(err,'err')
        },
        onResolved: data => {
            console.log(data)
        }
    })