import 'styles/globals.scss'
import Navbar from 'components/navbar/Navbar'
import { SiteContextProvider } from 'components/context/SiteContext'
import Footer from 'components/footer/Footer'
import { Open_Sans } from 'next/font/google'
import styles from 'styles/App.module.scss'
import Image from 'next/image'
import heroImage from 'public/images/jpg/background.jpg'

interface Props {
  children: React.ReactNode
}

const Font = Open_Sans({
  display: 'swap',
  weight: ['300', '400', '800'],
  subsets: ['latin-ext'],
})

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={Font.className}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>SNC Tag & Title</title>
        <meta
          name="description"
          content="Fast, Friendly, and Reliable Tag & Title Services in Maryland"
        />
        <meta name="author" content="Colton McClintock - Webdev Solutions LLC" />
        <meta name="keywords" content="" />
        <meta name="theme-color" content="#000000" />
        <meta name="language" content="English" />
        <meta name="web_author" content="Colton McClintock - Webdev Solutions LLC" />
        <meta name="owner" content="" />
        <meta name="url" content="" />
        <meta
          name="identifier-URL"
          content="
        "
        />
        <meta name="category" content="Vehicle Tags & Titles" />
        <meta name="coverage" content="Maryland" />
        <meta name="rating" content="General" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta property="og:title" content="SNC Tag & Title" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="SNC Tag & Title" />
        <meta property="article:publisher" content="" />
        <meta property="og:locale" content="en_US" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>
          <SiteContextProvider>
            <Navbar />
            <div className={styles.pageWrapper}>
              <div className={styles.heroWrapper}>
                <div className={styles.overlapGrid}>
                  <div className={styles.heroGradiantOverlay}></div>
                  <Image
                    alt=""
                    src={heroImage}
                    placeholder="blur"
                    sizes="100vw"
                    fill
                    className={styles.heroImage}
                    quality={100}
                  />
                </div>
              </div>
              {children}
            </div>
          </SiteContextProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
