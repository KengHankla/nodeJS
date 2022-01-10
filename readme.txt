GLOBALS - NO WINDOW

__dirname - path to current directory || path ของ ไฟล์ (แต่ไม่มีชื่อไฟล์)
__filename - file name  || path ของ ไฟล์ (มีชื่อไฟล์)
require - function to use modules (CommonJS)
modules - info about current module (file)
process - info env where the program is being executed

console.log(__dirname)
console.log(__filename)


ดู module ของไฟล์นั้น
console.log(module);
แล้ว run ที่ไฟล์นั้น



//เรียกใช้ ... ทุกๆ 1000 ms
setInterval(() => {
    console.log("Hello")
}, 1000);




//4
const person = {
    name : 'bob',
}
                //ตั้งชื่อใหม่
module.exports.singlePerson = person


//7
ใส่แบบนี้สามารถดู return ใน file นั้น ได้เลย
require('./7-mind-grenade')


//8
module os (require('os'))
os เช็ครายละเอียดของเครื่อง
os.userInfo()  แสดงข้อมูลเกี่ยวกับผู้ใช้
os.type(),  ระบบปฏิบัติการอะไร
os.release(),  เวอร์ชั่น
os.totalmem(),   memory ทั้งหมด
os.freemem(),  memory ที่เหลือ


//9
//วิธีสร้าง path
const filePath = path.join('/content','subfolder','test.txt')
//หาตัวสุดท้ายของ path
const base = path.basename(filePath)

//10 sync ทำ 1 เสร็จ ค่อยทำ 2
อ่านไฟล์ txt       //path             // ?
readFileSync('./content/first.txt','utf8')
//เขียนไฟล์        //path     //ตั้งชื่อไฟล์       //จะเขียนอะไร                                //ทำซ้ำอีกรอบ
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`,{flag:'a'})


//11 async ทำ 1 กับ 2 พร้อมกัน
คล้ายๆข้างบนแต่เป็น callback 
             //path             //string      //callback
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
})
                //path
  writeFile('./content/result-sync.txt',
          //จะเขียนอะไร                                 //callback
        `Here is the result : ${first},${second}`,(err,result)=>{
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })



install npm
    local (use it only in this particular project)
        npm i <packageName>

    galbal (use it in any project)
        sudo npm install -g <packageName>

package.json
    npm init (step by step,press enter to skpi)
    npm init -y (everything default)

วิธีลงโปรแกรม
ื    1. npm init (enter ไปเรื่อยๆจน มีคำถาม ให้ตอบ yes) เมื่อเสร็จจะได้ package.json 
    2. ลง dependencies npm i (lodash, bootstrap     
    การเอางานขึ้น github
        1.สร้างไฟล์ .gitignore (ใส่ /node_modules)
        2.git init