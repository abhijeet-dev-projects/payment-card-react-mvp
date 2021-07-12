import React from 'react';

import '../styles.css'

const Card = ({cardNumber, name, month, year, cvv}) => {

    const cardNumberArray = new Array(16);

    for(let i=0; i<cardNumberArray.length; i++){
        cardNumberArray[i] = cardNumber[i];
    }

    const logo = (cardNumber) => {
        let typeOfCard = cardNumber.split('').slice(0,2).join('');

        switch(typeOfCard){
            case '51':
                return 'MASTER-CARD';
            case '30':
                return 'VISA';
            case '20':
                return 'IFDK-CARD';
            default:
                return 'FUCKED-UP-CARD';
        }
    }

    return (
        <div 
            style={{display:'flex',
                    justifyContent:'space-between', 
                    width:'400px',
                    height:'200px', 
                    backgroundColor:'orchid'}}
                >
            
            <div>
            {
                cardNumber.length < 16 ? (
                    <div>
                        {cardNumberArray.map((digit, index) => {
                        return (
                            <span key={index} className={(index + 1) % 4 === 0 ? `cardNumber` : ''}
                            >
                          
                                {digit ? digit : '#'}
                            </span>
                        )
                    })}
                    </div> 
                ) : (
                    <div>
                        {cardNumberArray.map((digit, index) => {
                        return (
                            <span key={index} className={(index + 1) % 4 === 0 ? `cardNumber` : ''}
                            >
                                {(index + 1) >= 5 && (index + 1) <= 12 ? '*' : digit}
                            </span>
                        )
                    })}
                    </div>
                )
            }
            
            <div>{name}</div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{cvv}</div>
        </div>
        <div>{logo(cardNumber)}</div>
        </div>
    );
}

export default Card;
