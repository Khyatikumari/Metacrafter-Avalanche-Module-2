const contractAddress = '0x870779Bb3cFDbA9C12868Ee7f980892B3Aaf6198';
const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "initialMessage",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "counter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "incrementCounter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "message",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newMessage",
                "type": "string"
            }
        ],
        "name": "setMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}

async function loadContract() {
    return await new window.web3.eth.Contract(abi, 0x870779Bb3cFDbA9C12868Ee7f980892B3Aaf6198);
}

async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

async function setMessage() {
    const newMessage = document.getElementById('newMessage').value;
    const contract = await loadContract();
    const account = await getCurrentAccount();
    
    await contract.methods.setMessage(newMessage).send({ from: account });
    alert('Message Set Successfully');
}

async function getMessage() {
    const contract = await loadContract();
    const message = await contract.methods.message().call();
    
    document.getElementById('currentMessage').innerText = `Message: ${message}`;
}

async function incrementCounter() {
    const contract = await loadContract();
    const account = await getCurrentAccount();
    
    await contract.methods.incrementCounter().send({ from: account });
    alert('Counter Incremented Successfully');
}

async function getCounter() {
    const contract = await loadContract();
    const counter = await contract.methods.getCounter().call();
    
    document.getElementById('currentCounter').innerText = `Counter: ${counter}`;
}

window.addEventListener('load', async () => {
    await loadWeb3();
});
