//var input = require ('prompt-sync')();
  //  const list = input ('Masukan ID: ')
     //var look =  input (`ID: ${list}`)
    // console.log(look)
    
                            //createInterface
//let me = require('readline').creatInterface({
 // input: process.stdin,
 // output: process.stdout
//});//question
//me.quesiton('Masukan nomer dana : ',you => {
  //console.log(`${you} failed`)
  //me.close()
//})
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

const back = require ('readline').createInterface({
 input : process.stdin,
 output : process.stdout
})
back.question('Password: ',fulsh => {
  console.log(`password: ${fulsh} failed`)
  back.close();
})