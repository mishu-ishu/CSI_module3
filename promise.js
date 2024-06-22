const userLeft = false
const userOnAnotherSite = false

function stillWatchingPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User left',
        message: ':<'
      })
    }
    else if (userOnAnotherSite) {
      reject({
        name: 'User on another site',
        message: 'Want to continue watching?'
      })
    }
    else {
      resolve ('User still watching.')
    }
  })
}

async function stillWatchingAwait() {
  try {
    const stillWatching = await stillWatchingPromise()
    console.log (stillWatching)
  } catch (err) {
    console.log (err.name + " " + err.message)
  }
}

stillWatchingAwait()


























// function watchTutorialPromise() {
//   return new Promise((resolve, reject) =>{
//     if (userLeft) {
//     reject({
//       name: 'User left',
//       message: ':<'
//     })
//     }

//   else if(userWatchingCatMemes) {
//     reject({
//       name: 'User watching cat memes',
//       message: 'WebDevSimplifies < Cat'
//     })
//     }

//   else {
//     resolve("Thumbs up and subscribe")
//   }
//   })
// }

// watchTutorialPromise().then((message) => {
//   console.log('Success ' + message )
// }).catch((error) => {
//   console.log(error.name + ' ' + error.message)
// })