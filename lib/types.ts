export type ItemId = string;

// https://github.com/HackerNews/API#items
export interface Item {
  readonly id: ItemId;
  readonly deleted?: boolean;
  readonly type?: "job" | "story" | "comment" | "poll" | "pollopt";
  readonly by?: string;
  readonly time?: number;
  readonly text?: string;
  readonly dead?: boolean;
  readonly parent?: ItemId;
  readonly poll?: ItemId;
  readonly kids?: ItemId[];
  readonly url?: string;
  readonly score?: number;
  readonly title?: string;
  readonly parts?: ItemId[];
  readonly descendants?: number;
}

export type Story = Required<
  Pick<
    Item,
    "id" | "type" | "time" | "by" | "title" | "url" | "score" | "descendants"
  >
> &
  Pick<Item, "kids">;

export type Ask = Required<
  Pick<
    Item,
    "id" | "type" | "time" | "by" | "title" | "text" | "score" | "descendants"
  >
> &
  Pick<Item, "kids">;

export type Comment = Required<
  Pick<Item, "id" | "type" | "time" | "by" | "text">
> &
  Pick<Item, "kids" | "deleted">;

export const isStoryOrAsk = (item: Item): item is Story | Ask =>
  item.type === "story";

export const isStory = (item: Item): item is Story =>
  item.type === "story" && (item as Story).url !== undefined;

export const isComment = (item: Item): item is Comment =>
  item.type === "comment";
