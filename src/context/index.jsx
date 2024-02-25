import React, { useContext, createContext } from 'react' ;

import { useAddress, useContract, useWallet, useContractWrite }
from '@thirdweb-dev/react';
import {ethers} from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children}) =>{
    const { contract } = useContract
    ('0xc7f5F302DFe4B158CAF3Ee9104f5B0F041AA851e');
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

