

Add Smart Contract Functions: 

- AccessControl - Collection of Contracts: These contracts manages the various addresses and constraints for operations that can be executed only by specific roles.

- Base - SupplyChain.sol: This is where we define the most fundamental code shared throughout the core functionality. This includes our main data storage, constants and data types, plus internal functions for managing these items.

- Core - Ownable.sol: is the contract that controls ownership and transfer of ownership.

AccessControl Contracts:

- Producer: The Producer can harvest grapes, process vinification, sell to distributor and track authenticity.
- Distributor: The Distributor can buy & distribute wine bottle and track authenticity.
- Retailer: The Retailer can buy & put wine bottles for sale and track authenticity.
- Consumer: The consumer can buy wine bottle and track authenticity.

Base Contract - This smart contract must implement functions that track:

- Farm Information - Vineyard ID | Vineyard Name | Vineyard Longitude | Vineyard Latitude | Vineyard Address
- Grapes Information - Grapes ID | Grapes State | Grapes Description | Vintage Year | Vineyard Owner | Farm
- Wine Bottle Information - Wine ID | Grapes ID | Wine Price | Wine State | Wine Owners | Wine Description

Core Contract

- Ownable - Define an owner for all the contracts.

Front-end is configured to:

- Submit a product for shipment (producer to the distributor, distributor to retailer, etc).
- Receive product from shipment.
- Validate the authenticity of the product.


#### Project Information:

 - Migrations:  
 Transaction Hash: 0x7cbacef69457a4455d5f3c2d76a969bdd55bbc73a1c1c61b07dc5919fbf3a89d  
 Contract Address: 0xC83F320D0BE40427f798A0b53e11bB9910309E69 
 
 - ProducerRole:  
 Transaction Hash: 0x39765103ce0df5ca97e8b28ae06df82c08b753fcd47e749dc31a7be810fcb2b3  
 Contract Address: 0xe543723433F62Ddd2dcAd212B9AD516a1E3188F0  
 
 - DistributorRole:  
 Transaction Hash: 0x94c403ba5778bc2bd4c44f8a3c6aa5e60878f064ac716b6ec59eeeee82497ab9  
 Contract Address: 0x56AF12F57027852dD1A8134a8f73F179AB067417  
 
 - RetailerRole:  
 Transaction Hash: 0x1065b2a1335a4b245eec2de0b1cfaafa732eb3957efe6f10a37a45b4a83c18a7  
 Contract Address: 0x55421074DF0e81197f973B4eC52FD50073d87E00  
 
 - CustomerRole:  
 Transaction Hash: 0x83abdd331a5b5a0f408f2f86c0dfebb495928511e6edf1a4f120d8c33f28ff6b  
 Contract Address: 0x1a8b71d27362aB0c1B9aF87C9Dd39295119b8a82  
 
 - SupplyChain:   
 Transaction Hash: 0x76bd29d12ef47c355126c055ebd626870144008ff8b6551b41ddcf1847eafe8e  
 Contract Address: 0x7c1639f7229945e1fb4654e697B2c4fC403cB642  



