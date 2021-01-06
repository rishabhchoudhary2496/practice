//async function returns promise not value
async function getPosts() {
  const jsonData = await fetch('https://jsonplaceholder.typicode.com/posts')
  const rawData = await jsonData.json()
  return rawData;
}
getPosts().then(d => console.log(d))
