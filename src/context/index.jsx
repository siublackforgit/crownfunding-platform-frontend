import React, { useContext, createContext } from 'react' ;

import { useAddress, useContract, useContractWrite , useConnect, metamaskWallet}
from '@thirdweb-dev/react';
import {ethers} from 'ethers';

import { stringify } from 'flatted';

const StateContext = createContext();
const metamaskConfig = metamaskWallet();

export const StateContextProvider = ({children}) =>{
    const { contract } = useContract
    ('0xc7f5F302DFe4B158CAF3Ee9104f5B0F041AA851e');
    const { mutateAsync : createCampaign } =
    useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connectd = useConnect();
    const connect = async () => {
        try{
            const wallet = await connectd(metamaskConfig);
            console.log("connected to ", wallet);
        }catch(error){
            console.log('failed to connect, error:',error)
        }
      }

    const publishCampaign = async (form) => {
        try {
            console.log('address',address);
            const data = await createCampaign(
                {
                    args: [
                        address, // owner
                        form.title, // title
                        form.description, // description
                        form.target,
                        new Date(form.deadline).getTime(), // deadline,
                        form.image,
                    ],
                }
            )

            console.log('contract call success',data)
        }

        catch (error){

            console.log('error',error)

        }
    }

    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns');

        const parsedCampaigns = campaigns.map(
            (campaign, i) => (
                {
                    owner : campaign.owner,
                    title : campaign.title,
                    description : campaign.description,
                    target : ethers.utils.formatEther(campaign.target.toString()),
                    deadline : campaign.deadline.toNumber(),
                    amountCollected : ethers.utils.formatEther(campaign.amountCollected.toString()),
                    image : campaign.image,
                    pId : i
                }
            )
        )
        console.log('parsedCampaigns',parsedCampaigns)       
        return parsedCampaigns;
    }

    return (
        < StateContext.Provider
            value={{ address,
            contract,
            connect,
            createCampaign: publishCampaign,
            getCampaigns : getCampaigns,
            }}
        >
         {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

