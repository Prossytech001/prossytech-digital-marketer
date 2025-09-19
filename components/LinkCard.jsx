export default function LinkCard({ href, title, subtitle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl bg-neutral-800 p-4 text-center hover:bg-neutral-700"
    >
      <p className="text-white font-semibold">{title}</p>
      {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
    </a>
  );
}
