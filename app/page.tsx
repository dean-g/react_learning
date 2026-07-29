import Link from "next/link";

const demos = [
  { href: "/01-props/shopping", label: "01 - Props: Shopping example" },
  { href: "/02-children/01-badge", label: "02 - Children: Badge example" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-16 bg-white text-center dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          React Practice
        </h1>
        {demos.map((demo) => (
          <Link
            key={demo.href}
            href={demo.href}
            className="font-medium text-zinc-950 underline dark:text-zinc-50"
          >
            {demo.label}
          </Link>
        ))}
      </main>
    </div>
  );
}
