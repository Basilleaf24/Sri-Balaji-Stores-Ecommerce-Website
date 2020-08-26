import React from 'react';
import {Card, CardHeader, CardBody, Button} from 'reactstrap';
import {ORDERS} from '../shared/orders';
import SearchBar from './searchbar'
function RenderCard({item}) {

    return(
        <>
         <SearchBar back={'/home'}/>
        <Card className='order-card'>
            <CardHeader>
                <div>Placed on {item.placed} </div>
                <div>Scheduled for {item.schedule}</div>
            </CardHeader>
            <CardBody>
                <div className='p-1'><span className='fa fa-shopping-bag'>{' '}</span> Delivered by SBS</div>
                <div className='p-1'><strong>SBS store - RT Nagar</strong> - <span>{' '}</span><span className='fa fa-rupee fa-xs'>{' '}</span> {item.amt}</div>
                <div>Delivery Charges - <span style={{color:'green'}}><strong>FREE</strong></span></div>
                <div className='pb-1'>Order ID: {item.id}</div>
                <div className='pb-2'> <strong>Total Payable Amount</strong> -<span>{' '}</span><span className='fa fa-rupee fa-xs'>{' '}</span> {item.amt}</div>
                
                <ol class="progtrckr" data-progtrckr-steps="5">
                    <li class="progtrckr-done">Order Processing</li>
                    <li class="progtrckr-done">Pre-Production</li>
                </ol>

                <Button type='submit' value='submit' style={{backgroundColor:'orange'}} className='col-10 col-sm-4'> View Details </Button>
            </CardBody>
        </Card>
</>
            

           
    )

}

const myOrders = () => {
    const orders = ORDERS.map((item) => {
        return(
            <div key={item.id} className='col-12 col-sm-11 p-2'>
                <RenderCard item={item}/>

            </div>
        )
    })

    return(
        <div className='container'>
            <div className='row'>
                {orders}
            </div>

        </div>
    )

}

export default myOrders;