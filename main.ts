import { AptosClient, AptosAccount } from 'aptos';

// Define the Aptos node URL
const NODE_URL = 'https://fullnode.devnet.aptoslabs.com/v1';

// Create an instance of the AptosClient
const client = new AptosClient(NODE_URL);

// Define an async function to fetch account information
async function getAccountInfo(address: string) {
  try {
    const account = await client.getAccount(address);
    console.log('Account Info:', account);
  } catch (error) {
    console.error('Error fetching account info:', error);
  }
}

// Example usage
const exampleAddress = '0x1';
getAccountInfo(exampleAddress);