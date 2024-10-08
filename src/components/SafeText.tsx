import xss from "xss";

interface SafeTextProps {
  readonly text: string;
}

export function SafeText({ text }: SafeTextProps) {
  const sanitizedText = xss(text);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
}
