import Footer from "../Footer";
import Header from "../Header";

export default function Layout({children}){
    return(
        <>
        <Header showNavItems={true}/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}