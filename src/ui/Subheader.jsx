export default function Subheader({ text, link = "" }) {
  return (
    <div className="px-2 py-4 text-center text-xl">
      {link ? (
        <a
          href={link}
          className="text-ironshade-100 hover:text-emeraldshade-200 underline transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        text
      )}
    </div>
  );
}
