export function formatPeriod(
  start: string,
  end?: string,
  language = 'en',
  currentJobLabel = 'Present',
) {
  const format = (value: string) => {
    const [year, month] = value.split('-').map(Number);
    return new Date(year, month - 1).toLocaleDateString(language, {
      month: 'short',
      year: 'numeric',
    });
  };
  const endFormatted = end ? format(end) : currentJobLabel;
  return `${format(start)} – ${endFormatted}`;
}
