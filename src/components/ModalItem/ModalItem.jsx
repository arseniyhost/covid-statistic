import React from 'react'
import "./ModalItem.css";
import { RiHeartPulseFill } from 'react-icons/ri';
import { GiDeathJuice } from 'react-icons/gi';
import { FiFilePlus } from 'react-icons/fi'

const ModalItem = ({ current, clearCurrent }) => {
    return (
        <>
            {
                current ? <div className="modal">
                    <div className="modal-info">
                        <h3 className="name">{current.Country}</h3>
                        <div className="totalCon">
                            <div className="icon"><RiHeartPulseFill /> <p>Total Confirmed:</p></div>
                            <p>{current.TotalConfirmed}</p>
                        </div>
                        <div className="totalDeahs">
                            <div className="icon"><GiDeathJuice /> <p>Total Deaths:</p></div>
                            <p>{current.TotalDeaths}</p>
                        </div>
                        <div className="totalRec">
                            <div className="icon"><FiFilePlus /> <p>Total Recovered:</p></div>
                            <p>{current.TotalRecovered}</p>
                        </div>
                        <button onClick={clearCurrent}>ok</button>
                    </div>
                </div> : ''
            }
        </>
    )
}

export default ModalItem
