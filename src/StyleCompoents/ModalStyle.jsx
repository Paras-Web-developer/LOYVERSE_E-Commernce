import styled from "styled-components";

export const ReceiptModalDiv = styled.div`
   transition:1ms;


    .Receipt_Detail {
    background: #3c69c5;
    padding: 1rem;
    color: white;
}
.top_total {
    text-align: center;
    background: #F4F8FB;
    padding: 1rem;
}
.show_receipt_div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #DFE7ED solid;
    padding: 9px;
    width: 93%;
    margin: auto;
    p {
    font-size: 12px;
    color: #848484;
    padding-top:1px;
}
}
.Refund_btn{
    padding: 1rem;
    text-align: center;
}
.Refund_btn button{
    background: rgb(250, 164, 57);
    border-radius: 5px;
    width: 8rem;
    height: 40px;
    border: none;
    font-size: 10px;
    color: white;
    cursor: pointer;   
    &:hover:active{
        background-color:rgb(247, 138, 4); 
        font-size: 16px;
 }
 }
 




`