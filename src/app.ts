import { ethers } from "ethers";

(async () => {
  const rinkebyUri = "";

  const provider = ethers.providers.getDefaultProvider(
    rinkebyUri
  );
  
  let abi = [
    "function getExchanges() view returns (address[], string[])",
  ];

  let contractAddress = "0x5101feD546FacccD309A77Ad755170f8fBf1E81D";
  // let contractAddress = "0x994586416AD0C79D99dE871C291aEC35ee0ed684";

  let contract = new ethers.Contract(contractAddress, abi, provider);

  console.log(await contract.functions.getExchanges());
})();
