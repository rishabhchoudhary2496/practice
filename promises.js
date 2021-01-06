//consuming promises
const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')

postsPromise
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err)
  })



//defining own promises
function mockReturnApiFunction() {
  const mockData = [
    { _id: 0, title: 'My Hero Academia' },
    { _id: 1, title: 'Re Zero' },
    { _id: 2, title: 'Full Metal Alchemist' },
    { _id: 3, title: 'Tonikawa' },
  ]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData)
    }, 1000)
  })
}

mockReturnApiFunction()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))


