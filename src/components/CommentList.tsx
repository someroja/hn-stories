import Comment from "@/components/Comment";
import { ItemId } from "@/lib/types";

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
          <Comment id={id} />
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
