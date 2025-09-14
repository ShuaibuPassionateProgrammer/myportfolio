
export default function Footer() {
  return (
    <footer className="text-center text-sm text-slate-500 dark:text-slate-400 py-8" role="contentinfo">
      <p>
        © {new Date().getFullYear()} Ibrahim Shuaibu Isa. All rights reserved.
      </p>
    </footer>
  );
}