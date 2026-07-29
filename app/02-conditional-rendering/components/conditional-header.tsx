import Link from "next/link";

export default function ConditionalHeader() {
    const conditionalHeader = [
        { href: "/02-conditional-rendering/example1", label: "02 - Example 1" },
        { href: "/02-conditional-rendering/example2", label: "02 - Example 2" },
        { href: "/02-conditional-rendering/example3", label: "02 - Example 3" },
        { href: "/02-conditional-rendering/example4", label: "02 - Example 4" },
        { href: "/02-conditional-rendering/example5", label: "02 - Example 5" },
        { href: "/02-conditional-rendering/example6", label: "02 - Example 6" },
        ];

    return (
        <>
            <div className="flex gap-2">
                {conditionalHeader.map((demo) => (
                        <Link
                            key={demo.href}
                            href={demo.href}
                            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                        >
                            {demo.label}
                        </Link>
                    ))}
            </div>
        </>
    )
}