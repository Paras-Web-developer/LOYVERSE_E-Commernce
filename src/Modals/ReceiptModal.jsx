import React, { useEffect } from 'react'
import { ReceiptModalDiv } from "../StyleCompoents/ModalStyle"

const ReceiptModal = () => {

    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        return () =>{
            document.body.style.overflowY ="scroll"
        }

    })
    return (<>

        <ReceiptModalDiv>

            <div className='Receipt_Detail'>
                <p>Receipt Detail</p>
            </div>
            <div className='top_total'>
                <h3>$ 449</h3>
                <p>Total</p>
            </div>
            <div className='show_receipt_div'>
                <div>
                    <h5>Cashier Owner</h5>
                    <p>POS: POS 1</p>
                </div>
                <div>
                    <h5>#1-1006</h5>
                    <p>12 Augest, 2021 , 11:39 am</p>
                </div>
            </div>
            <div className='show_receipt_div'>
                <div>
                    <h5>Super Sys</h5>
                    <p>1x 120.00</p>
                </div>
                <div>
                    <h5>$120.00</h5>
                </div>
            </div>
            <div className='show_receipt_div'>
                <div>
                    <h5>Super Sys</h5>
                    <p>1x 120.00</p>
                </div>
                <div>
                    <h5>$120.00</h5>
                </div>
            </div>
            <div className='show_receipt_div'>
                <div>
                    <h5>Discount</h5>
                    <p style={{ color: "#537BCC" }}>Off season sale</p>
                </div>
                <div>
                    <h5>$10000.00</h5>
                </div>
            </div>
            <div className='show_receipt_div'>
                <div>
                    <h5>Total</h5>
                    <p>Cash</p>
                </div>
                <div>
                    <h5>$620.00</h5>
                </div>
            </div>
            <div className='Refund_btn'>
                <button >REFUND</button>
            </div>

        </ReceiptModalDiv >
    </>
    )
}

export default ReceiptModal