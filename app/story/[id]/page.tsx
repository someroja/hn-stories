import CommentList from "$components/CommentList";
import SafeText from "$components/SafeText";
import { getItem } from "$lib/api";
import { ItemId, isStory, isStoryOrAsk } from "$lib/types";

interface StoryPageProps {
  params: { id: ItemId };
}

const StoryPage = async ({ params }: StoryPageProps) => {
  const { id } = params;
  const item = await getItem(id);

  if (!item || !isStoryOrAsk(item)) {
    return <p>{id} does not seem to be an ID of a story</p>;
  }

  return (
    <article>
      <header className="pb-2">
        <h1 className="text-xl">{item.title}</h1>
        <p className="text-xs">
          {item.score} points by {item.by}
        </p>
      </header>
      {isStory(item) ? (
        <a href={item.url}>{item.url}</a>
      ) : (
        <SafeText text={item.text} />
      )}
      <aside>
        <p className="pt-6 pb-1 text-xs">{item.descendants} comments</p>
        <CommentList ids={item.kids} />
      </aside>
    </article>
  );
};

export default StoryPage;
