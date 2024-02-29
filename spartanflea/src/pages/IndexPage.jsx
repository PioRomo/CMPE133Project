import {Link} from "react-router-dom";
import RegistrationPage from "./RegistrationPage";

export default function IndexPage(){

    return(
        <body className="bg-yellow-200">
            {/*This div controls the header */}
            <div className=" bg-blue-200 flex">
                <a href="/" className="">
                    <img className = "w-1/3" src ="https://docs.google.com/drawings/d/e/2PACX-1vSoyGWRLYwYovMlLkiEwC9D3iWQDKVmiXFt_80xsv0721UmTsETuE1j2tsbpcqxrTsZ5EN9CDQzCuZo/pub?w=4320&h=864" alt="SpartanFlea wordmark"></img>
                </a>

                <Link to={'/register'}>
                    Hello
                </Link>
            </div>

            <div className="h-screen w-screen">
                
                
            </div>

        </body>
        
    );
}