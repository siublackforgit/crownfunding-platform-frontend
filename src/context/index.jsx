import React, { useContext, createContext } from 'react' ;

import { useAddress, useContract, useWallet, useContractWrite }
from '@thirdweb-dev/react';
import {ethers} from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children}) =>{
    const { contract } = useContract
    ('0xFDcaEa3f5A30BD85d1e96219b443fe5e5E38D1a2');
    const { mutateAsync : createCampaign } =
    useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useWallet();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign(
                [
                    address,
                    form.title,
                    form.description,
                    form.target,
                    new Date(form.deadline).getTime(),
                    form.image
                ]
            )

            console.log('contract call success',data)
        }

        catch (error){

            console.log('error',error)

        }
    }

    return (
        < StateContext.Provider
            value={{ address,
            contract,
            CreateCampaign: publishCampaign,
            }}
        >
         {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

