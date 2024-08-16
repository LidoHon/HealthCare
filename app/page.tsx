import PasskeyModel from "@/components/PasskeyModel";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home({searchParams}:SearchParamProps) {

  const isAdmin = searchParams.admin === 'true'
  return (
    <div className="flex h-screen max-h-screen">
      {/* todo: will make otp verification or passkey model soon */}
      {isAdmin && <PasskeyModel/>}


      <section className="remove-scrollbar container">
        <div className="sub-container  max-w-[496px]">
          <div className="flex flex-row gap-2">
            <Image
              // src="/assets/icons/logo-full.svg"
              src="/assets/images/logo-try1.jpeg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit rounded-full"
            />
            <h1 className="pt-2 text-3xl font-bold">EthioCare</h1>
          </div>

          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 EthioCare
            </p>
            <Link href="/?admin=true" className=" text-green-500">
              admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onbording.jpeg"
        height={1000}
        width={1000}
        priority
        alt="onbording image"
        className="side-img max-w-[50%] "
      />
    </div>
  );
}
