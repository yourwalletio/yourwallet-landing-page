import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const FooterSection = () => {

  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10  bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2   items-center ">
            <Link href="#" className=" font-bold inline-flex items-center ">
              <img src="/yourwallet-logo.png" alt="Your Wallet Logo" className="bg-gradient-to-tr from-primary  to-[#477DE9] w-12 h-12 mr-2 rounded-full" />

              <h3 className="text-2xl">Your Wallet</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <div>
              <Link href="https://github.com/yourwallett" className="opacity-60 hover:opacity-100">
                Github
              </Link>
            </div>

            <div>
              <Link href="https://x.com/yourwallettr" className="opacity-60 hover:opacity-100">
                X
              </Link>
            </div>

            <div>
              <Link href="https://www.instagram.com/yourwallettr" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
            <div>
              <Link href="https://t.me/yourwallettr" className="opacity-60 hover:opacity-100">
                Telegram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>


        </div>

        <Separator className="my-3" />
        <section className="w-full text-center text-xs">
          <h3 className="">
            &copy; {year} Your Wallet
          </h3>
        </section>
      </div>
    </footer>
  );
};
