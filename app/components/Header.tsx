import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://avatars.githubusercontent.com/u/110589548?v=4"
            width={50}
            className=" rounded-full"
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The Dracu Blog</h1>
      </div>
      <div>
<Link
href="https://github.com/dracu-lah"
className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#bd93f9] flex items-center rounded-full
text-center">Go to My Github Profile </Link>

      </div>
    </header>
  );
}

export default Header;
