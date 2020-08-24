import React from 'react';

function CategScroll()
{ 
    return(
        <div className="container" >
            <div className="row">
    <div className="box  col-12">
        <div className="itemsscroll">
            <img  src={`${process.env.PUBLIC_URL}/images/grocery.png`}></img><p>Grocery & Staples</p>

        </div>
        <div className="itemsscroll">
            <img   src={`${process.env.PUBLIC_URL}/images/tea.jpg`}></img><h6>Beverages</h6>

        </div>
        <div className="itemsscroll">
            <img   src={`${process.env.PUBLIC_URL}/images/dove.jpeg`}></img><p>Personal Care</p>

        </div>
        <div className="itemsscroll">
            <img  src={`${process.env.PUBLIC_URL}/images/lizol.jpg`}></img><p>Household Items</p>

        </div>
        <div className="itemsscroll">
            <img  src={`${process.env.PUBLIC_URL}/images/goodday.png`}></img><p>Snacks</p>
            

        </div>
        </div>
    </div>
    </div>)

}
export default CategScroll