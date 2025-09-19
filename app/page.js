import Image from "next/image";
import LinkCard from "@/components/LinkCard";
import { FaWhatsapp, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gradient-to-b  lex flex-col justify-center align-center from-neutral-900 to-black min-h-screen text-white flex flex-col items-center">
      {/* Profile */}
      <div className=" flex flex-col justify-center align-center mt-16 text-center">
        <Image
          src="/hero.png"
          alt="ProssyTech"
          width={40}
          height={40}
          className="rounded-full flex justify-center w-[100%] border border-gray-600"
        />
        <h1 className="text-3xl font-bold mt-4">ProssyTech</h1>
        <p className="text-gray-400">software engineer / Digital marketer</p>

        {/* <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="https://wa.me/234XXXXXXXXX">💬</a>
          <a href="https://youtube.com/...">▶️</a>
          <a href="https://tiktok.com/@...">🎵</a>
          <a href="https://instagram.com/...">📷</a>
        </div> */}
        <div className="flex justify-center gap-6 mt-4 text-3xl">
          <a href="https://wa.me/message/BFK5N4OMHUXXG1" aria-label="WhatsApp">
            <FaWhatsapp className="hover:text-green-400" />
          </a>
          <a href="https://youtube.com/@prossytech-p2x?si=fsobIlfzAFjXvo3u" aria-label="YouTube">
            <FaYoutube className="hover:text-red-500" />
          </a>
          <a href="https://www.tiktok.com/@prossytech5?_t=ZS-8zqnhxkCLtF&_r=1" aria-label="TikTok">
            <FaTiktok className="hover:text-pink-500" />
          </a>
          <a href="https://www.instagram.com/prossytech001?igsh=OTBkdWQ5MWg4ZHF5" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-400" />
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="mt-8 space-y-4 w-80">
        <LinkCard
          href="https://wa.me/message/BFK5N4OMHUXXG1"
          title="WhatsApp"
          subtitle="Building imagination"
        />
        <LinkCard href=" https://chat.whatsapp.com/I45oBV5XfS1CSZ76Z8PX3J?mode=ems_share_t " title="💬Get Today's list of remote job (free)" />
        <LinkCard href=" https://chat.whatsapp.com/I45oBV5XfS1CSZ76Z8PX3J?mode=ems_share_t " title="💬join our remotejob community" />
        <LinkCard href=" https://chat.whatsapp.com/I45oBV5XfS1CSZ76Z8PX3J?mode=ems_share_t " title="💬join how to start earning money by building website for company (master class) " />
      </div>
    </main>
  );
}
