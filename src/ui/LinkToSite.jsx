function LinkToSite({ to, text }) {
  return (
    <a
      className="hover:text-ember-200 text-ember-300 font-bold underline underline-offset-3 transition-all duration-200"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default LinkToSite;
