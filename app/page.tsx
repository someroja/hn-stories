export const dynamic = "force-dynamic";

import SafeText from "$components/SafeText";
import { getItem, getTopStoryIds } from "$lib/api";
import { isStoryOrAsk } from "$lib/types";
import Link from "next/link";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

interface HomePageProps {
  searchParams?: SearchParams;
}

// Page size 30 for that classic HN experience :)
const pageSize = 30;

const getPageNumber = (searchParams?: SearchParams): number => {
  const pageParam = searchParams ? searchParams["page"] : undefined;
  const pageNumber = typeof pageParam === "string" ? Number(pageParam) : 1;
  return isNaN(pageNumber) ? 1 : pageNumber;
};

const HomePage = async ({ searchParams }: HomePageProps) => {
  const storyIds = await getTopStoryIds();
  const pageNumber = getPageNumber(searchParams);

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageStoryIds = storyIds.slice(startIndex, endIndex);

  const stories = await Promise.all(
    pageStoryIds.map((storyId) => getItem(storyId))
  ).then((items) => items.filter(isStoryOrAsk));

  const hasNextPage = endIndex < storyIds.length;

  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {stories.map((story) => (
          <li key={story.id}>
            <Link className="text-lg" href={`/story/${story.id}`}>
              <SafeText text={story.title} />
            </Link>
          </li>
        ))}
        {hasNextPage && (
          <li>
            <Link
              className="rounded bg-cyan-900 px-6 py-2 text-white"
              href={`/?page=${pageNumber + 1}`}
            >
              More
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default HomePage;
