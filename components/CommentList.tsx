import Comment from "$components/Comment";
import { ItemId } from "$lib/types";

interface CommentListProps {
  ids?: Array<ItemId>;
  className?: string;
}

const CommentList = ({ ids, className }: CommentListProps) => {
  if (!ids) {
    return null;
  }

  return (
    <ul className={className}>
      {ids.map((id) => (
        <li key={id}>
          {/* TypeScript has some known issues with Server Components,
            so we have to use this temporary workaround:
            @ts-expect-error Async Server Component */}
          <Comment id={id} />
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
