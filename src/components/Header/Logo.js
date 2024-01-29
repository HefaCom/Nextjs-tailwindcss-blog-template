import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/logol.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
            <Image src={profileImg} alt="LearnMentorHub logo" className="w-full h-50 w-50 rounded-full" sizes="20vw" priority />
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">LearnMentorHub</span>
    </Link>
  )
}

export default Logo
