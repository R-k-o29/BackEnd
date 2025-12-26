let http = require('http');

let server=http.createServer((req,res)=>{
    if(req.url=="/news"){
        let obj={
            status:1,
            data:[
                {
                    newsTitle:'Heading',
                    newsDes:"Heading description"
                },
                {
                    newsTitle:'Lower',
                    newsDes:"Lower description"
                }
            ]
        }

        res.end(JSON.stringify(obj))
    }
    if(req.url=="/about"){
        res.end("About from node")
    }
    if(req.url=="/"){
        res.end("Hello from node")
    }


})

server.listen("3001");