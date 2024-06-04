import Image from "next/image"

type Props = {}

export default function Logo({}: Props) {
  return (
    <Image
        className="invert" 
       src="/static/next.svg"
       width={100}
       height={20}
       alt="logo"
        />
  )
}