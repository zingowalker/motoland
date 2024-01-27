import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src="/logos/logo.png"
          alt="motoland adventures logo"
          width={300}
          height={300}
          className="w-96 overflow-hidden"
        />
      </Link>
    </div>
  );
};

export default Logo;
