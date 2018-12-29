import regeneratorRuntime from 'regenerator-runtime';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

const getTopStories = async () => {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => {
      return response.json();
    })
    .then(posts => {
      return posts.slice(1, 100);
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

let items;
const storyIds = getTopStories().then(async ids => {
  items = await getItems(ids);

  render(<App items={items} />, document.getElementById('app'));
});
