// fetch('https://api.github.com/users/maykbrito')
//     .then(response => responde.json())
//     .then(data => fetch(data.repos_url))
//     .then(res => res.json())
//     .then(d => console.log(d))
//     .catch( error => console.log(error))

async function start() {
  // try {
  //     const response = await fetch('https://api.github.com/users/maykbrito')
  //     const user = await response.json()
  //     const reposResponse = await fetch(user.repos_url)
  //     const repos = await reposResponse.json()
  //     console.log(repos)
  // } catch (error) {
  //     console.log(error)
  // }
  const url = 'https://api.github.com/users/maykbrito'
  const user = await fetch(url).then(r => r.json())
  const userRepos = await fetch(user.repos_url).then(r => r.json())
  console.log(userRepos);
}
start()