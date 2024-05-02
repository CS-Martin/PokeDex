'use client';

import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
 

  return (
    <div>
      {id}
      <h1>hello</h1>
    </div>
  );
}
