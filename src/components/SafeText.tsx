import xss from "xss";

interface SafeTextProps {
  readonly text: string;
}

const SafeText = ({ text }: SafeTextProps) => {
  const sanitizedText = xss(text);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
};

export default SafeText;
