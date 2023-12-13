import { ethers } from "ethers";
import { SIGNATURE_PROXY_CHILD_INIT_CODE, SIGNATURE_PROXY_FACTORY_ADDRESS } from "./constants";

export function getProxyAddress(signer: string): string {
    return ethers.utils.getCreate2Address(
        SIGNATURE_PROXY_FACTORY_ADDRESS,
        ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address'], [signer])),
        ethers.utils.solidityKeccak256(['bytes'], [SIGNATURE_PROXY_CHILD_INIT_CODE])
    );
}