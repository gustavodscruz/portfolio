import Link from "next/link";

export default function Logo({ big }: {big? : boolean}) {
  return (
    <Link href={'/'} className={`font-secondary w-max  ${big ? "text-3xl" : "text-2xl"}`}>
      gustavodscruz
    </Link>
  );
}
