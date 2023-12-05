import Card from "./component/card/card.jsx";
import Layout from "./component/layout/layout";
const Projet = () => {
  return (
    <Layout>
      <div className="bg-cyan-950 tex text-white w-screen h-screen">
        <h1 className="text-4xl h-20">
          Mes <span className="text-cyan-400"> Projet</span>
        </h1>
        <Card></Card>
      </div>
    </Layout>
  );
};

export default Projet;
