
import React, { useState } from 'react'
import axios from 'axios';
import { ReceiptDiv } from '../StyleCompoents/StyleComponetPage'
import { CiSearch } from "react-icons/ci";
import tableD from "../data/tabledata";
import ReceiptModal from "../Modals/ReceiptModal";

const Receipts = () => {

    // Recipt API Data get with Axiox Start
    const [receipts, setReceipts] = useState([]);
    axios.get("localhost:4000/getallReceipt")
    // Recipt API Data get with Axiox End


    const [ModalOpen, setModalOpene] = useState(false)
    const CloseModal = () => setModalOpene(false)
    const OpenModal = () => setModalOpene(true)

    return (<>

        <ReceiptDiv>
            {ModalOpen && <div className='Modal_container'>
                <div className='Modal_content'>
                    <div onClick={CloseModal} className='cut'>X</div>
                    <ReceiptModal />
                </div>
            </div>}
            <div className='receipt_container'>
                <div className='Receipt_header'>
                    <p>Receipts</p>
                    <div className='input_seacch'>
                        <span>   <div>
                            <CiSearch />
                        </div>
                            <input type='search' placeholder='Search' /></span>
                    </div>
                </div>
                <div className='table_container'>
                    <table className='tabletag'>
                        <thead className='table_head'>
                            <tr className='table_row'>
                                <td><b>Sr.No</b></td>
                                <td><b>Receipt No.</b></td>
                                <td><b>Customer</b></td>
                                <td><b>Payment Type</b></td>
                                <td><b>Total Amount</b></td>
                                <td><b>Date & time</b></td>
                            </tr>
                        </thead>
                        <tbody>{
                            tableD.map((el) => {
                                return (<>
                                    <tr>
                                        <td>{el.sNo}</td>
                                        <td onClick={OpenModal} style={{ color: "#3B69C5", cursor: "pointer" }}>{el.rec}</td>
                                        <td>{el.cust}</td>
                                        <td>{el.PayM}</td>
                                        <td>{el.total}</td>
                                        <td>{el.Data}</td>

                                    </tr>

                                </>)
                            })
                        }
                        </tbody>

                    </table>
                </div>

            </div>

        </ReceiptDiv>

    </>
    );
};

export default Receipts;
