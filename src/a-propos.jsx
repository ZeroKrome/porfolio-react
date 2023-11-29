import Layout from "./component/layout/layout";

function Apropos() {
  return (
    <Layout>
      <div className="bg-cyan-950 tex text-white w-screen h-screen">
        <h2 className="text-3xl h-20">
          A propos de <span className="text-cyan-400">moi</span>
        </h2>
        <h3 className="text-2xl h-40 text-center">
          Développeur web et web mobile
        </h3>
        <p className="text-center text-xl ">
          Dans le but de me reconvertir, je suis actuellement en formation pour
          devenir Développeur web et web mobile. Ce métier m'a toujours attiré
          et c'est donc dans cette optique que je me suis lancé.
        </p>
        <div className="grid justify-items-center">
          <img src="/img/logo.png" alt="logo" className="" />
        </div>
      </div>
    </Layout>
  );
}

export default Apropos;
