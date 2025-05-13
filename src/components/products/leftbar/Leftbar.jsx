import React from "react";
import { Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router";
import "./leftbar.css";
function Leftbar(props) {
    return (
        <>
            <div>
                <h5 className="text-primary p-2">View Prodcuts Categories wise</h5>
            </div>
            <div>
                <Link to={'/products'} className={`btn btn-${props.ccat==''?'success':'primary'} m-3`}>All</Link>
            {
                props.menu.map(item => (
                    <Link to={'/products/' + item} className={`btn btn-${props.ccat == item ? 'success' : 'primary'} m-3`}>
                        
                        {item}
                    </Link>
                ))
           }
            </div>
        </>
    );
}

export default Leftbar;