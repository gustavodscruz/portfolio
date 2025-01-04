export default function Logo({ big }: {big? : boolean}) {
  return (
    <span className={`font-secondary w-max ${big ? "text-3xl" : "text-2xl"}`}>
      gustavodscruz
    </span>
  );
}
