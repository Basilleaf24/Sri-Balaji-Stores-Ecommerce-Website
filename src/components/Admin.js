import React from 'react'


function Admin()
{
    const data=[
        {'Name': 'Abc', 'Age': 15, 'Location': 'Bangalore','vd':''},
        {'Name': 'Def', 'Age': 43, 'Location': 'Mumbai','vd':''},
        {'Name': 'Uff', 'Age': 30, 'Location': 'Chennai','vd':''},
        {'Name': 'Ammse', 'Age': 87, 'Location': 'Delhi','vd':''},
        {'Name': 'Yysse', 'Age': 28, 'Location': 'Hyderabad','vd':''}
    ]
   const  getKeys = function(){
        return Object.keys(data[0]);
        }
      //  console.log(getKeys())
// returns the keys

// when u map the array it will be in the form of value,index
        const getHeader = function(){
            var keys = getKeys();
            return keys.map((key)=>{
               // console.log("index"+index+"key"+key)
            return <th key={key}>{key.toUpperCase()}</th>
            })
            }
           // console.log(getHeader())

           const RenderRow = (props) =>{
            return props.keys.map((key, index)=>{
            return <td  key={props.data[key]}>{props.data[key]}</td>
            })
           }
           const getRowsData = function(){
            var items = data;
            var keys = getKeys();
            return items.map((row, index)=>{
                const ht=<span><button>View Details</button></span>
                row['vd']=ht
            return <tr key={index}><RenderRow key={index} data={row} ht={ht} keys={keys}/></tr>
            })
            }
        

        return (
          <>
          <div className="table table-striped table-bordered container table-hover">
            <table>
            <thead className="thead-dark">
            <tr>{getHeader()}</tr>
            </thead>
            <tbody>
            {getRowsData()}
            </tbody>
            </table>
            </div>
          </>
            
            );
}
export default Admin
/*  */