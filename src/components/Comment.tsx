import { CommentList } from "@/components/CommentList";
import { SafeText } from "@/components/SafeText";
import { getItem } from "@/lib/api";
import { ItemId, isComment } from "@/lib/types";

interface CommentProps {
  id: ItemId;
}

export async function Comment({ id }: CommentProps) {
  const item = await getItem(id);

  if (!item || !isComment(item) || item.deleted) {
    // Better not to render anything in order to keep the comments section clean.
    return null;
  }

  return (
    <div>
      <p className="pt-2 text-sm">{item.by} says:</p>
      <SafeText text={item.text} />
      <CommentList className="pl-8" ids={item.kids} />
    </div>
  );
}
