type Props = {
  svgPath: string;
  className: string;
};

export default function Icon({ svgPath, className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d={svgPath}></path>
    </svg>
  );
}
