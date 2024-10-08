import { CommentList } from "@/components/CommentList";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { SafeText } from "@/components/SafeText";
import { getItem } from "@/lib/api";
import { ItemId, isStory, isStoryOrAsk } from "@/lib/types";
import { Suspense } from "react";

interface StoryPageProps {
  params: { id: ItemId };
}

export default async function StoryPage({ params }: StoryPageProps) {
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
        <p className="pb-1 pt-6 text-xs">{item.descendants} comments</p>
        <Suspense fallback={<LoadingIndicator text="Loading comments..." />}>
          <CommentList ids={item.kids} />
        </Suspense>
      </aside>
    </article>
  );
}
