type PillProps = {
  label: string;
  variant?: "outline" | "solid";
};

export function Pill({ label, variant = "outline" }: PillProps) {
  const styles =
    variant === "solid"
      ? "bg-primary text-white border-primary"
      : "text-primary border-primary";

  return (
    <li className={`
      inline-flex items-center
      px-3 py-1
      text-sm font-medium
      rounded-full
      border
      ${styles}
    `}>
      {label}
    </li>
  );
}