import Link from "next/link";
import Image from "next/image";

export const Logo = ({ className }: { className: string }) => (
  <Image
    src="https://firebasestorage.googleapis.com/v0/b/portfolio-f6166.appspot.com/o/logo%2Flogo.png?alt=media&token=cf592a9a-d132-4a4c-abd8-e0269d7bce6c"
    width={32}
    height={32}
    className={className}
    alt="Armando's Logo"
  />
);
