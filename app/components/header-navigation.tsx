import Link from "next/link";

const demos = [
  { href: "/01-props/shopping", label: "01 - Props: Shopping example" },
  { href: "/01-badge", label: "02 - Children: Badge example" },
  { href: "/01-tooltip", label: "02 - Children: Tooltips" },
];

export default function HeaderNavigation() {

    return (
        <nav className="w-64 shrink-0 rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-sans dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Demos
            </h2>
            <div className="flex flex-col gap-1">
                {demos.map((demo) => (
                <Link
                    key={demo.href}
                    href={demo.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                >
                    {demo.label}
                </Link>
                    ))}
            </div>
        </nav>
    )
}