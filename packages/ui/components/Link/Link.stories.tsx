import Link from "./Link";

export const Default = () => {
  return (
    <div className="flex gap-x-4">
      <Link href="http://localhost:61000/?story=button--variants">
        Internal Link
      </Link>
      <Link className="text-red-500" external href="https://www.google.com">
        External Link
      </Link>
    </div>
  );
};
