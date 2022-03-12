const fs = require('fs');
const path = require('path');

//Path Module
console.log(`path.seperator : ${path.sep}`);
console.log(`path.delimiter : ${path.delimiter}`);

let FilePath = __dirname + "///hello.txt"

console.log(`path.dir : ${path.dirname(FilePath)}`);
console.log(`path.extname : ${path.extname(FilePath)}`);
console.log(`path.basename : ${path.basename(FilePath)}`);
//-remove ext from basename
console.log(`${path.basename(FilePath, path.extname(FilePath))}`);
//Normailize
console.log(`Normailize : ${path.normalize(FilePath)}`);
FilePath = path.normalize(FilePath);


//Read Write File(Async)
fs.readFile(FilePath, (err, data)=>{
    if(err){
        throw err
    }
    console.log("readFile : " + data.toString())
})

fs.writeFile(FilePath, "Hello World", (err)=>{if(err) throw err; console.log("Write Done!")})

//Read Write File(Sync) - 될 수 있으면 Async를 사용하여 Promise, Async/Await를 이용하자
let data = fs.readFileSync(FilePath);
console.log("Read Sync : " + data.toString());

//바로 읽어오는 것은 좋지 않다, Buffer를 이용하자
const buffer = Buffer.from("이제 버퍼로 바뀜");

console.log(`Buffer Content : ${buffer}`);
console.log(`Buffer Length : ${buffer.length}`);
console.log(`Buffer to String : ${buffer.toString()}`);
let buffer_ary = [Buffer.from("1"), Buffer.from("2")];
//Concat Buffers In Arrays
const buffers = Buffer.concat(buffer_ary);
console.log(`Buffer to String : ${buffers.toString()}`);
//Create Empty Buffer(5 size)
let Empty_Buffer = Buffer.alloc(5) 

//Stream Using Buffer(Size : 16)
const readStream = fs.createReadStream(FilePath, {highWaterMark : 16});
data = [];

readStream.on('data', (chunk)=>{ data.push(chunk); })
readStream.on('end', ()=>{console.log("Read Stream : " + Buffer.concat(data).toString())});