type SplitTextProps = {
  text: string;
  lines?: readonly string[];
};

export function SplitText({ text, lines }: SplitTextProps) {
  const visual = lines ?? [text];

  return visual.map((line, index) => (
    <span key={`${line}-${index}`} className="block">
      {line}
    </span>
  ));
}
