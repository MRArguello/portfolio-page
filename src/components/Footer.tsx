import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <div
      className={`flex justify-end items-center py-4 px-6 bg-neutral-100 dark:bg-zinc-900`}
    >
      <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
        <SocialLinks variant="icon" />
      </div>
    </div>
  );
}
