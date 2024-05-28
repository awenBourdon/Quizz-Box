import Feed from "@components/Feed"
import Head from "next/head"

const Home = () => {
  return (
    <>
    <Head>
        <title>Quizz Box</title>
        <meta name="Quizz Box" content="Application open source Ada Tech School" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Quizz Box
            <br className="max-md:hidden" />
            <span className="blue_gradient" >Postez Vos Questions Ici</span>
        </h1>
        <p className="desc text-center">Quizz Box est une application open-source pour la promotion des Emma Watson afin de poster et (re)découvrir les questions liés à l'informatique.</p>
        <Feed />
    </section>
    </>
  )
}

export default Home