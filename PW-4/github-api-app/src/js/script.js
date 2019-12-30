// eslint-disable-next-line
searchButton.addEventListener('click', getUsernames);

function createHtml(githubUser) {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';
  document.body.append(userCard);

  const userCardMainSection = document.createElement('div');
  userCardMainSection.className = 'user-card__main-section';
  userCard.append(userCardMainSection);

  const userCardAvatar = document.createElement('img');
  userCardAvatar.className = 'user-card__avatar';
  userCardAvatar.src = githubUser.avatar_url;
  userCardMainSection.append(userCardAvatar);

  const userCardMainInfo = document.createElement('div');
  userCardMainInfo.className = 'user-card__main-info';
  userCardMainSection.append(userCardMainInfo);

  const userCardName = document.createElement('h1');
  userCardName.className = 'user-card__name';
  userCardName.innerHTML = `${githubUser.name}`;
  userCardMainInfo.append(userCardName);

  const userCardBio = document.createElement('p');
  userCardBio.className = 'user-card__bio';
  userCardBio.innerHTML = `${githubUser.bio !== null ? githubUser.bio : 'Bio is empty'}`;
  userCardMainInfo.append(userCardBio);

  const userCardLocation = document.createElement('p');
  userCardLocation.className = 'user-card__location';
  userCardLocation.innerHTML = `Location: ${githubUser.location}`;
  userCardMainInfo.append(userCardLocation);

  const userCardDateCreation = document.createElement('p');
  userCardDateCreation.className = 'user-card__date-creation';
  userCardDateCreation.innerHTML = `Created: ${githubUser.created_at.substring(0, 4)}`;
  userCardMainInfo.append(userCardDateCreation);

  const userCardExtraSection = document.createElement('div');
  userCardExtraSection.className = 'user-card__extra-section';
  userCard.append(userCardExtraSection);

  const userCardRepos = document.createElement('div');
  userCardRepos.className = 'user-card__extra-info';
  userCardRepos.innerHTML = `<p class="user-card__property">Public repos</p><p class="user-card__value">${githubUser.public_repos}</p>`;
  userCardExtraSection.append(userCardRepos);

  const userCardGists = document.createElement('div');
  userCardGists.className = 'user-card__extra-info';
  userCardGists.innerHTML = `<p class="user-card__property">Public gists</p><p class="user-card__value">${githubUser.public_gists}</p>`;
  userCardExtraSection.append(userCardGists);

  const userCardFollowers = document.createElement('div');
  userCardFollowers.className = 'user-card__extra-info';
  userCardFollowers.innerHTML = `<p class="user-card__property">Followers</p><p class="user-card__value">${githubUser.followers}</p>`;
  userCardExtraSection.append(userCardFollowers);

  const userCardFollowing = document.createElement('div');
  userCardFollowing.className = 'user-card__extra-info';
  userCardFollowing.innerHTML = `<p class="user-card__property">Following</p><p class="user-card__value">${githubUser.following}</p>`;
  userCardExtraSection.append(userCardFollowing);

  const linkMore = document.createElement('a');
  linkMore.href = `${githubUser.html_url}`;
  linkMore.target = '_blank';
  userCard.append(linkMore);

  const buttonMore = document.createElement('div');
  buttonMore.className = 'user-card__button';
  buttonMore.innerHTML = '<p>More</p>';
  linkMore.append(buttonMore);
}

function getUserData(url) {
  fetch(`https://api.github.com/users/${url}`)
    .then((response) => response.json())
    .then((githubUser) => { createHtml(githubUser); });
}

function getUsernames() {
  const userNames = [];
  // eslint-disable-next-line
  searchInput.value.split(',').forEach(element => { userNames.push(element.trim()); });
  userNames.forEach((elem) => { getUserData(elem); });
}
