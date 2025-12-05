export default function Footer() {
  return (
    <footer className="text-center text-sm text-slate-500 dark:text-slate-400 py-8 border-t border-slate-200 dark:border-slate-800" role="contentinfo">
      <p>
        © {new Date().getFullYear()} Ibrahim Shuaibu Isa. All rights reserved.
      </p>
    </footer>
  );
}