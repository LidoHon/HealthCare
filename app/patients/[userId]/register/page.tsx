import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Sentry from "@sentry/nextjs"

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  Sentry.metrics.set("user_view_register", user.name);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container  max-w-[860px] flex-1 flex-col py-10">
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
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2024 EthioCare </p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        priority
        alt="onbording image"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
