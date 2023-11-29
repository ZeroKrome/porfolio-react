import Layout from "./component/layout/layout";

function App() {
  return (
    <Layout>
      <div className="bg-cyan-950 tex text-white w-screen h-screen ">
        <h3 className="text-2xl  h-20 text-center">Bienvenue, moi c'est</h3>

        <h1 className="text-4xl h-20 text-center">Mathieu Lemaire</h1>

        <h3 className="text-2xl h-20 text-center">
          je suis <span className="text-cyan-400">developpeur web</span>
        </h3>
        <div className="grid justify-items-center">
          <img src="/img/logo.png" alt="logo" className="" />
        </div>
      </div>
    </Layout>
  );
}
export default App;
