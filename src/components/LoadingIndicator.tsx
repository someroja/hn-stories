interface LoadingIndicatorProps {
  readonly text?: string;
}

export function LoadingIndicator({
  text = "Loading...",
}: LoadingIndicatorProps) {
  return <div className="text-sm italic">{text}</div>;
}
