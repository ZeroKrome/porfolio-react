// // mettre tout ce qui est commun à l'ensemble de notre site
// // évite de rappeler la même chose sur chaque page

import Footer from "../footer/footer.jsx";
import Header from "../header";

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    );
};

export default Layout;