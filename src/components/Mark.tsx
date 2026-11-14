type Props = { className?: string };

export function Mark({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3.2 26.2 15.2h-3.8L28.4 27H3.6l6-11.8H5.8L16 3.2Z"
      />
    </svg>
  );
}
