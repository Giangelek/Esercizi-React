import { Link } from "react-router-dom";

export function NotFound(){
    return(
        <div className="notFoundContainer">
            <img src="https://media.istockphoto.com/id/514622028/photo/little-raccoon-on-tree.jpg?s=612x612&w=0&k=20&c=Wv0nbG1CUBCSwCOMo7YVPAwlzvTJYsOY5K7I5u9LVSc=" alt="" height="200" width="300"/>
            <div className="notFoundTextCont">
                <h2>Oh no! Un procione ha rubato la pagina che stai cercando!</h2>
                <h4>La pagina che stai cercando non è al momento disponibile.</h4>
                <h4>Torna <Link path={"/welcome"}>indietro</Link></h4>
            </div>
        </div>
    )
}