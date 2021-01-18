const buf1 = Buffer.alloc(10);
buf1.write("hello this is great to have you ")
console.log(buf1.toString())
const buf2 = Buffer.from('kimi no nawa wa');
console.log(buf2.toString())