// // mettre tout ce qui est commun à l'ensemble de notre site
// // évite de rappeler la même chose sur chaque page

const LayoutMaintenance = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <h1>maintenance</h1>
    </>
  );
};

export default LayoutMaintenance;
