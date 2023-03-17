import { ItemId, Item } from "$lib/types";

export const getTopStoryIds = async (): Promise<ItemId[]> =>
  fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then((res) =>
    res.json()
  );

export const getItem = async (id: ItemId): Promise<Item> =>
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) =>
    res.json()
  );
