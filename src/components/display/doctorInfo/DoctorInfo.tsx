import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Logo from "@/components/logo/Logo";
import Link from "next/link";

function DoctorInfo() {
  return (
    <aside className="w-1/4 p-3">
      <article className=" rounded-3xl w-full h-full bg-background p-4 2xl:p-[2vw]">
        <Link className="py-6 flex justify-center" href={'/'}>
          <Logo />
        </Link>
        {/* image */}
        <div className="bg-muted/50 p-3 border border-primary rounded-full w-full aspect-square overflow-hidden">
          <div className="relative rounded-full w-full aspect-square overflow-hidden">
            <Image src={"/images/doctor.jpg"} alt="" fill objectFit="cover" />
          </div>
        </div>
        {/* name */}
        <section className="my-5">
          <h1
            className={`rounded-3xl bg-muted/50 p-5 font-semibold my-2 ${styles.h1}`}
          >
            Dr. Md. Mostofa Alam Bony
          </h1>
          <p className={`${styles.p} rounded-3xl bg-muted/50 p-5`}>
            MBBS, BCS (Health), <br /> FCPS (Medicine), <br /> Certificate
            Course on Diabetology (BRIDEM), <br /> Consultant (Medicine)
          </p>
        </section>
      </article>
    </aside>
  );
}

export default DoctorInfo;
