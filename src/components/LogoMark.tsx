import Image from "next/image";

export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={242}
      height={245}
      style={{ width: size, height: "auto" }}
      priority
      aria-hidden="true"
    />
  );
}
