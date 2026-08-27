export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <a
      href="/"
      className={`flex items-center gap-2 ${className}`}
      aria-label="KiotViet"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/v2/logo.svg"
        alt="KiotViet"
        className={`h-8 w-auto ${light ? "brightness-0 invert" : ""}`}
      />
    </a>
  );
}