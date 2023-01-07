import Link from "next/link";

export default function Navi() {
  return (
    <>
      <div tw="flex flex-row justify-around items-center font-medium mb-32">
        <Link href={"/"}>Timeline</Link>
        <Link href={"./detailview"}>Detailview</Link>
      </div>
    </>
  );
}
