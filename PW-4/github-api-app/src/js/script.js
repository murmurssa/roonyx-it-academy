// eslint-disable-next-line
searchBtn.addEventListener('click', getUsernames);
let userNames = [];

function createHtml(githubUser) {
  const wrap = document.createElement('div');
  wrap.className = 'user-card';
  document.body.append(wrap);
  const img = document.createElement('img');
  img.src = githubUser.avatar_url;
  const divMainInfo = document.createElement('div');
  divMainInfo.className = 'user-card__main-info';
  divMainInfo.innerHTML = `<h1>${githubUser.name}</h1><div>Some bio: ${githubUser.bio}</div>
  <div>Location: ${githubUser.location}</div><div>Created: ${githubUser.created_at.substring(0, 4)}</div>`;
  img.className = 'user-card__avatar';
  const repos = document.createElement('div');
  repos.className = 'user-card__other-info';
  repos.innerHTML = `<p>Public repos :</p>  <div>${githubUser.public_repos}</div>`;
  const gists = document.createElement('div');
  gists.className = 'user-card__other-info';
  gists.innerHTML = `<p>Public gists :</p>  <div>${githubUser.public_gists}</div>`;
  const followers = document.createElement('div');
  followers.className = 'user-card__other-info';
  followers.innerHTML = `<p>Followers :</p>  <div>${githubUser.followers}</div>`;
  const following = document.createElement('div');
  following.className = 'user-card__other-info';
  following.innerHTML = `<p>Following :</p>  <div>${githubUser.following}</div>`;
  const linkMore = document.createElement('a');
  linkMore.href = `${githubUser.url}`;
  linkMore.target = '_blank';
  const btnMore = document.createElement('div');
  btnMore.className = 'user-card__btn-more';
  btnMore.innerHTML = '<p>more</p>';
  linkMore.append(btnMore);
  wrap.append(img);
  wrap.append(divMainInfo);
  wrap.append(repos);
  wrap.append(gists);
  wrap.append(followers);
  wrap.append(following);
  wrap.append(linkMore);
}

function getUserData(url) {
  fetch(`https://api.github.com/users/${url}`)
    .then((response) => response.json())
    .then((githubUser) => { createHtml(githubUser); });
}

function getUsernames() {
  userNames = [];
  // eslint-disable-next-line
  search.value.split(',').forEach(element => { userNames.push(element.trim()); });
  userNames.forEach((elem) => { getUserData(elem); });
}
