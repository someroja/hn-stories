interface LoadingIndicatorProps {
  readonly text?: string;
}

const LoadingIndicator = ({ text = "Loading..." }: LoadingIndicatorProps) => {
  return <div className="text-sm italic">{text}</div>;
};

export default LoadingIndicator;
