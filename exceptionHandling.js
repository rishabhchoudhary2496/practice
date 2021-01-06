let number = 89

try{
    throw new Error('making an error')
}catch(e){
    console.log(e.message)
}finally{
    console.log('finally')
}

function add(n1,n2) {
    console.log(n1,n2)
}
add(10,20)