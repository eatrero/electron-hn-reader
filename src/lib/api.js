import regeneratorRuntime from 'regenerator-runtime';
export const getTopStories = async () => {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => {
      return response.json();
    })
    .then(posts => {
      return posts.slice(1, 100);
    })
    .then(posts => {
      return getItems(posts);
    });
};

const getItem = async id => {
  return await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  ).then(response => response.json());
};

const getItems = async ids => {
  return await Promise.all(ids.map(id => getItem(id)));
};
