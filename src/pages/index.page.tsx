import Link from "next/link";
import Image from "next/future/image";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";
import openSourceImage from "./open-source.svg";

const Home: CustomPage = function Home() {
  return (
    <>
      <NextSeo />

      <section className={styles["hero-section"]}>
        <div className={styles["left-side"]}>
          <h2>Hoşgeldiniz 👋</h2>
          <p>
            2015&apos;ten bu yana Türkiye&apos;deki ve Türkçe konuşan
            geliştiricilerin oluşturduğu açık kaynak ekosistemine katkıda
            bulunmak, insanları açık kaynak geliştirmeye motive etmek,
            farkındalık oluşturmak ve engelleri ortadan kaldırmak için faaliyet
            gösteriyoruz.
          </p>
          <div className="button">
            <Link href="/about">
              <a>
                Bilgi
              </a>
            </Link>
          </div>
        </div>
        <div className={styles["right-side"]}>
          <Image
            src={openSourceImage}
            alt="Open Source"
            width="498"
            height="328"
          />
        </div>
      </section>

      <section className={styles["learn-section"]}>
        <h1>Öğrenim</h1>

        <p>
          - bu alan henüz tasarlanmamıştır -
        </p>
      </section>
    </>
  );
};

export { Home, Home as default };
