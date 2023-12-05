import Layout from "./component/layout/layout";

const Experiences = () => {
  return (
    <Layout>
      <div className="bg-cyan-950 tex text-white w-screen h-screen">
        <h1 className="text-3xl h-20">
          Voici mes <span className="text-cyan-400">éxperiences</span>
        </h1>
        <div className="grid grid-flow-col justify-stretch">
          <div class="flex flex-1">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              repudiandae totam nulla et, nisi labore sequi veritatis!
            </p>
            <div className="inline-block h-[650px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-100"></div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ut
              sed quas rerum, molestias eos veniam provident.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experiences;
