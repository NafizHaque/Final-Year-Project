# Final-Year-Project
A DecSchool of Electronic Engineering and Computer Science 















	Report





Programme of study: 
Electronic Engineering and Computer Science 



Project Title: 
Float Medical




Supervisor: 
Nikos Tzevelekos



Student Name:
NAFIZ HAQUE












Date: 22/11/2020






Final Year 
Undergraduate Project 2020/21	
 	

 
Abstract

Today in a technological world the handling of data is a very important concern on the minds of everyday people. Where organisations have the ability to use that data commercially for their own monetary gains thus resulting in the lack of privacy and confidentiality that a user would expect when handling their sensitive data. Many debates have occurred over this time arguing about the misuse of data within the healthcare sector. Where the accuracy of the data being collected abides by the users and organisations ethical and legal standards regarding confidentiality. (Yi Chen, 2019) This boils down to ensuring that patients receive thew right level of care and have access to their own sensitive data, placing them beyond the reach of Hospitals and Medical institutions. This is shown within a survey conducted by Ipsos Mori a social research institute where the public’s attitude towards the NHS and their confidence in the NHS to handle their data privacy and security. The survey’s findings show that people have scepticism over the reliability on the NHS to protect their data thus resulting in a small 36% of the group being confident about the security of the NHS whereas the 64% did not believe that the NHS was securely keeping their data. (reform, 2021) 
My proposal of a permissioned ledger for medical data. Putting patients, rather than governments and Hospitals in control of the sensitive data that defines these patients is a great solution to solving the key problems pointed out for us. This results in patients being in control of their own sensitive personal data with the help of blockchain technologies, FloatMedical project, leveraging the use of Ethereum to provide a service that will handle data surely in a tamperproof way. 
The application    will be built in react utilising the Ethereum Network and an off-chain storage solution in the form of Ethereum swarm.   In essence creating a Decentralised application for patients empowering them to take control of their data wherever they are this is enabled by them having access to this web application from the comfort of their smart phone. 
Contents
Chapter 1:	Introduction	4
1.1	Background	4
1.2	Problem Statement	4
1.3	Aim	5
1.4	Objectives	5
1.5	Report Structure	6
Chapter 2:	Literature Review	7
2.1	Patient Centred Care	7
2.1.1	Decentralised Vs Centralised Storage	7
2.1.2	Challenges of a Blockchain Solution	8
2.2	Blockchain	8
2.2.1	The Double Spending Problem	8
2.2.2	Blockchain Architecture	9
2.2.3	Blockchain transactions	10
2.3	Smart Contract	10
2.4	Ethereum Swarm	11
2.4.1	Storage keeping	11
2.4.2	Incentive systems	11
2.5	Mobile Health	12
2.5.1	Security and Privacy	12
2.5.2	Accessing and Storing EMRs	12
Chapter 3:	Requirements	13
3.1	Use cases	14
Chapter 4:	Design Plan	16
4.1	Truffle and Ganache: Application framework	16
4.2	React	16
4.3	Web3	17
4.4	Metamask	17
4.5	Smart Contracts and Solidity	17
4.6	Ethereum Swarm	18
4.7	OriginStamp	19
Chapter 5:	Implementation and Testing	20
5.1	Setting up dependencies	20
5.2	Setting up Boilerplate	21
5.3	The Medical.Sol Contract	22
5.4	The front-end Application	24
5.4.1	The App File	24
5.4.2	The Home Page	27
5.4.3	The Upload Page	27
5.4.4	The View Page	29
5.4.5	Add patient/Doctor Page	30
5.5	The Testing	31
Chapter 6:	Conclusion	33
6.1	Achievements	33
6.2	Challenges faced.	33
6.3	Future Work	34
References	35

Chapter 1:	Introduction
1.1	Background
My project is to utilize blockchain to allow patients to assign rules and permissions for their medical data, giving back users control over their data. From permitting specific researcher to access their data for a limited time to Doctors viewing their data in a clinic. This is all possible securely and efficiently with blockchain technologies. 
To understand how these advancing technologies of blockchain can help the medical sector with securing and accessing data. We will need go over the concept of what a blockchain is and what it provides to us as a service. 
Blockchain technology acts as a shared decentralized ledger to record transactions. Utilising a sequence of blocks (a group of transactions) which are linked together and is distributed amongst a peer-to-peer network. Blockchain records are immutable and contain every transaction from the creation of the chain to the present day. This is all done to validate and uphold the integrity of the chain. (Yi Chen, 2019) The blockchain is used for the secure transfer of tangible and intangible items such as Copyrights, houses, cars, online records. without requiring a third-party intermediary like bank or government. Once a data is recorded inside a blockchain, it is very difficult to change it.
Traditionally blockchain technologies have been used to manage cryptocurrency transactions. However, this has been built upon to encompass many ideas such as Copyright/patent proofs and the field I will be discussing in this report, the medical sector. Applications such as administration, insurance coverage, and finally the main use-case that the report will be looking at, electronic medical record management. 
The inefficiencies of medical records today and their associated high costs of transferring between location are becoming more and more of a concern. Additionally, the level of trust needed to transfer sensitive data like medical records. Sending data via email is considered a security risk while there is clear inefficiency inherent in transcribing a digital asset onto optical media, which is commonly only read once at the receiving site.
1.2	Problem Statement
Currently, healthcare has been extremely exhausted with a current pandemic and the addition stress of rising patient count and tests. The two major focuses that must be addressed with this are data security and ownership. With the rapid rise of hospital admittance and patients, sensitive medical records currently lack the secure infrastructure for the system to be robust. This leads to data breaches and theft, which in this day and age would mean massive consequences and strain on healthcare today. 

Furthermore, attempts to reform Britain’s medical record system has left the whole system in disarray: paper records continue to be omnipresent, in tandem several ‘Disconnected local Trust-specific electronic systems’. (Vazirani, 2020) The need for the medical sector to advance its infrastructure to a digital one would solve multiple clinical and administrative errors. Additionally, the main problems that arise are that patients ‘must recount their history multiple times’ which is shown to be inefficient and ineffective leading to medical errors.

In 2018, the Department of Health and Human Services’ Office for Civil Rights (OCR) received notifications of many data breaches that resulted in the exposure of 13 million total healthcare record.

This enables the Medical sector to be at risk of integrity flaws, where current medical systems infrastructure contains very poor security and prone to cyber-attacks, examples of these attacks can be shown in the WannaCry attack in 2017 that affected the NHS trust system stealing enormous amounts of sensitive medical data. (Vazirani, 2020)

Concerns for patients arise as they discover that their medical data is not fully owned by them. This becomes increasing more popular as the relevance of personalised medicine and medical tech wearables have also increased thus the notion for having full ownership of one’s medical data is needed. 
1.3	Aim
	
This solution empowers users, by taking back and controlling their privacy in this digital age.
The aim of the project is to implement a solution for a specific audience of patients in the medical sector. Blockchain would be a good effective way to gatekeep and manage sensitive patient medical data. In this implementation users will all have their medical data hashed and salted to be added on a block chain, whereas the data should be stored in a distributed fashion. Furthermore, the goal is to bring power of privacy into the patients’ hands. This is done by creating viewing permissions for users to allow transparency and ease of use while being able to monitor who has access to their sensitive data.
1.4	Objectives
List a series of objectives you need to achieve to fulfil the aims of your project.
There are core feature and functionalities that are described here:

1.	To hash a medical document file and store that hash on the blockchain. With the use of a hashing algorithm, will create a unique key and timestamped.
2.	2.  Storing data using Decentralized storage measures. This will help with the scalability of the project as in the medical field deals with vast amounts of data.
3.	3. Creating viewing permissions and data retrieval instruction, via the blockchain smart contracts
4.	4. Temporary access can be used via a key that patients pass onto other users such as Doctors or healthcare researchers.


In this project I will be using Ethereum which is a decentralized block chain technology. Ethereum contains solidarity which in turn powers the use of smart contracts. With the use of smart contracts, these cryptographic rules are helped to check that certain conditions are met. This will be done on a private blockchain. 

We then need a way to store the data that is given to us whether it is in a form of a centralized cloud storage or a decentralized one. I will be using Ethereum swarm. The main purpose of Swarm is to be a decentralised store for Dapp code, user data, blockchain data, and state data.

The focus on the project is to provide patients with a way to secure their data and control the access to said data. 







1.5	Report Structure



The next chapter is the ‘Literature Review’. In this section it will include the research and theory behind the concepts of the application. In-depth Knowledge on the specific type of blockchain the application will be using and what that blockchain provides as a service to application. Technical detail will be discussed on the properties of the blockchain. For example, the use and deployment of smart contracts and the uses of Swarm Ethereum and how these two features interact with each other. Lastly, the chapter discusses other marketed applications and the implementations of medical data on a blockchain.  

Chapter 3 is the Requirements. This is where all the function and non-function requirements are discussed and written. Including the uses cases of the application. These requirements must be met for the implementation to be a success.

Chapter 4 consists of the Design plan. This section will include the knowledge, skills and concepts acquired from the Literature Review and apply them to the implantation of the application. Furthermore, the chapter discuses many procedures and methodologies that will be used.

Chapter 5 is the implementation and testing; this will be a presentation style chapter of code snippets. Showing how the application functions and the rigorous testing applied. 

Chapter 6 is Conclusion, a reflection on the project as a whole the achievements I will make also considering all the problems and challenges that may arise during the development process

Chapter 2:	Literature Review
2.1	Patient Centred Care

Today in a technological world the handling of data is a very important concern on the minds of everyday people. Where organisations have the ability to use that data commercially for their own monetary gains thus resulting in the lack of privacy and confidentiality that a user would expect when handling their sensitive data. Many debates have occurred over this time arguing about the misuse of data within the healthcare sector. Where the accuracy of the data being collected abides by the users and organisations ethical and legal standards regarding confidentiality. This boils down to ensuring that patients receive thew right level of care and have access to their own sensitive data, placing them beyond the reach of Hospitals and Medical institutions. This is shown within a survey conducted by Ipsos Mori a social research institute where the public’s attitude towards the NHS and their confidence in the NHS to handle their data privacy and security. The survey’s findings show that people have scepticism over the reliability on the NHS to protect their data thus resulting in a small 36% of the group being confident about the security of the NHS whereas the 64% did not believe that the NHS was securely keeping their data.  (reform, 2021)
My proposal of a permissioned ledger for medical data. Putting patients, rather than governments and Hospitals in control of the sensitive data that defines these patients is a great solution to solving the key problems pointed out for us. This results in patients being in control of their own sensitive personal data with the help of blockchain technologies, FloatMedical project, leveraging the use of Ethereum to provide a service that will handle data surely in a tamperproof way. (G. Zyskind, 2015)
 
2.1.1	Decentralised Vs Centralised Storage
Debates occur over the use of a centralised storage system or a decentralised ledger technology for sensitive data. As The blockchain was not built for this purpose and it is reasonable to think that providing a centralised encrypted drive would be a one great solution. However, the security and reliability of a Blockchain ledger far outweigh the use of a centralised storage means. A decentralised storage system distributes copies of files over the nodes this means that the whole network can provide a copy of a file by asking nearby nodes if they have them stored. This leads to a network with no central power, as we will discuss later in this report the blockchain requires a majority vote on the network to cast any changes. This in tandem to how blocks on a chain interact with each other where 1 block is directed to another blocks hash. This hash would be created from the contents of its data, if this hash changes, then the link would break. These two technologies we will discuss will allow information added to never be deleted or changed. (reform, 2021)









2.1.2	 Challenges of a Blockchain Solution
We have discussed that this project gives power to patients and their rights to withhold their sensitive data. However, our decentralised blockchain solution comes with a few problems and caveats that we must address when we move onto the designing phase of the report.
Currently our model provides patients their own medical files as a “Proof of existence”. We want to create an application that would build around this concept and create a solution where patients can safely secure their files free from commercialisation and tampering. However, there are some unique features of a blockchain network that we must address before we start designing our plan.
The first issue that arises is that public blockchains are accessible by everyone due to the nature of a decentralised network where there is no central power. These problems surrounding privacy are big as we want our patients’ data to only be accessed by them and the persons they grant. 
The second issue is the scalability of our project. On the Ethereum blockchain (or any blockchain network) transactions that are added require gas to perform. This means that we require to pay Ethereum every time a transaction occurs, in our application the transactions would be the files. The main problem develops as these prices scale ridiculously high the more compute power it takes. For example, storing a transaction of “Bob sends 0.1ETH to Alice” is infinitely times smaller than uploading a pdf document. The costs would be tremendous as we add more and more file to our network. This approach is unrealistic, unfeasible, and impractical in a real-world scenario. 
The solution that I propose to the challenges above are to have an off-chain decentralised storage network. This would be separate from the Ethereum blockchain. This off-chain solution storage could be privately encrypted and thus handle wi6th high data throughput. This allows us to store our essential files without thew risk of public access or the risks associated with high costs from uploading that much data. The perfect combination of the two as the Ethereum network provides a hash or a “Proof of existence” which maintains a public transaction of the file and an off-chain storage for the actual files to be stored. 
2.2	Blockchain
Blockchain is a shared, immutable ledger that simplifies the process of tracking and monitoring online payment transactions with other key features including tracking assets in business networks. In terms of these “assets” could refer to many things such as tangible objects (houses, cars, land) or intangible properties (copyright, Intellectual properties, online records). The use of blockchain for these assets is to reduce the risk applied to handling data like stated before and cutting the costs. (guru99, 2021)
The technique is intended to timestamp digital documents so that it is not possible to backdate them or temper them. The purpose of blockchain is to solve the double spending problem without the need of a central server.
2.2.1	 The Double Spending Problem
When dealing with digital currency there are incidences that can occur where an individual can use the same money to spend on multiple transaction thus creating a problem of money that is meant to be reserved for one transaction is instead being used on multiple. An example of this is if a physical transaction took place in a shop with physical money. That money is taken and is exclusively sent to that store, the individual cannot spend that money elsewhere. However, in an online setting with electronic payment it is possible to copy the transaction details and resend where the same money could be spent multiple times by a single individual. (Loi Luu, 2016)
This is where a blockchain is put in place to prevent a situation of an owner copying their transaction. The way this is done is a blockchain accumulates and contains the history of all transactions that have occurred from the creation of the chain to the present day. They are separately verified and protected by a series of rules and confirmations that is usually deployed via a smart contract.
2.2.2	Blockchain Architecture  







A blockchain consists of a series of blocks that contain information about transactions within them. The data which is stored inside is indicated by the nature of the chain.













Within as block contains a series of information, which for example in a bitcoin chain the information stored are transactions receipts for users. This is also accompanied by a unique hash number assigned to the block. The hash identities a block and all its contents within, the hash function changes depending on the information stored within it therefore every hash is unique. This is a main safety measure to obstruct tampering attempts. Transactions are immutable thus cannot be changed due to the nature of how blockchain is built shown in our next figure. 






Figure 4 shows blocks with a hash header. This hash header is deterministic of the contents of its respected block and all previous blocks before it. For example, Bitcoin uses a SHA256, a hash algorithm to create hashes for the blocks. The figure also shows that Block 3 is created by its own transaction information stored and the use of the previous blocks hash. This creates a chain of blocks as the previous blocks hash values are based on the new-found block’s hash value. This is the technique that makes a blockchain so secure. 
2.2.3	Blockchain transactions
Step 1) Some person requests a transaction. The transaction could be a piece of information ranging from data records to cryptocurrency.
Step 2) The requested transaction is broadcasted to a P2P network with the help of nodes.
Step 3) The network of nodes validates the transaction.
Step 4) Once the transaction is complete the new block is then added to the existing blockchain. 
2.3	Smart Contract

Smart contracts are the building blocks of Decentralised applications that allow model value of things that are other than currency. A Smart contract is a set of computer cryptographic protocols intended to digitally enable, verify, and enforce the transaction of a contract. Smart contracts allow blockchain integrity and verification without the use of a third party. (Loi Luu, 2016) Accordingly, smart contract helps users exchange money, copyrights, and data in a secure, transparent, and self-enforced way. A smart contract is identified by an address and its code is stored onto the blockchain. Users can invoke the contract by sending their transaction to that address. (Ethereum, 2020)

Ethereum is a popular decentralised public blockchain on tier with the likes of bitcoin. However, unlike bitcoin Ethereum is a newer emerging blockchain with some key differences. Bitcoin was primary built around the use of electronic payments through bitcoin currency. 

Ethereum is a prominent Turing-complete smart contract platform, supporting stateful contracts meaning that storage on the chain is used for the storage of values where be it can be invoked multiple times.
A turning-completeness programming language that I commonly used in tandem with Ethereum for the creation of smart contracts is Solidity. This programming language is intended to be easy to learn for programmers that are already well-known with one or more common programming languages. 

Currently Web2 refers to the version of the internet right now that is most used today. This consists of generated content and usability which is dominated by companies that providing services in exchange for users’ personal data, this means that users are subject to being the product for companies. (Ethereum, 2020)

Web3 allows Development of Decentralised apps (Dapps), these are the features that Web3 provide:

•	Anyone who is on the network has permission to use the service – or in other words, permission is not required.
•	No one can block you or deny you access to the service.
•	Payments are built in via the native token, ether (ETH).
•	Ethereum is Turing-complete, meaning you can pretty much program anything.

This means that we cannot access the Ethereum network in a Web2 setting. To deploy a Dapp and run smart contracts we would need to have a Web3 API. Developers, with the power of Web3, have the ability to interact with the Ethereum network.
2.4	Ethereum Swarm
Ethereum Swarm is a censorship-resistant, permissionless, decentralised storage and communication infrastructure. Swarm services include node-to-node messaging, media streaming, decentralised database services, and scalable state-channel infrastructure for decentralised service economics. These services are essential layers for web3 and their associated Dapps. Ethereum swarm provides an incentive layer which uses a peer-to-peer network, deposit-based storage and allows trading resources for payment.  The primary objective of Swarm is to provide decentralised and redundant storage of Ethereum’s public record, in particular storing and distributing Dapp code and data as well as blockchain data. (Tron, 2016)
Swarm is a network, a service, and a protocol (rules). A Swarm network is a network of nodes running a wire protocol called bzz using the Ethereum devp2p/rlpx network stack as the underlay transport. (Tron, 2016)
Swarm at its base layer level, would store arbitrary data chunks with a minimum size of 4kb. This allows content addressing to assign addresses to chunks as an input and returns a 32-byte output. These hash functions are irreversible and thus allows us security. Swarm’s main offering as a distributed chunk store is that you can upload content to it. The nodes constituting the Swarm all dedicate resources (diskspace, memory, bandwidth, and CPU) to store and serve chunks. (Ethereum Swarm, 2021)

2.4.1	Storage keeping
There are two major features that set swarm apart from other decentralised distributed storage solutions. While existing services (BitTorrent and IPFS) allow you to register and share the content you host on your server, Swarm provides the hosting itself as a decentralised cloud storage service. (Tron, 2016). The use of a decentralised cloud storage provides the ability for uploading to swarm’s root chunk. where users can have person access to their secure chunk via a smart contract. Swarm aspires to be a generic storage system for applications catering to use-cases that allow serving low-latency storage for Dapps and acting as guaranteed persistent storage. 
2.4.2	Incentive systems

The idea of the incentive system goes as follows where nodes that are willing to provide a long-term storage service put up a security deposit. They can then sell storage services and promise to store certain chunks. They can then be “tried” and if they cannot provide the chunk, they promised they lose their security deposit. This allows a chance for unpopular chunks to be held by these agents. Such incentive systems model individual participants as agents following their rational self-interest, yet the network’s emergent behaviour is massively more beneficial to the participants than without coordination. (Tron, 2016)


2.5	Mobile Health 

Mobile applications and remote monitoring machines are essential for patient care in today’s advancing technological society. Blockchain is a great technological service that can be applied to existing architectures in the medical field to improve security and quality of software. Examples include researchers creating and testing an mHealth (mobile health) smart phone application for cognitive behavioural therapy for insomnia. (Hannah S Chen, 2019) This application would collect patient data and dispatch this data to a private blockchain network that is tied to said application. These electronic medical records (EMRs) in the network were secure and resistant to tampering due to the nature of how blockchain operates using SHA256 hash functions to encrypt data and how blocks are reliant on previous blocks. 
2.5.1	Security and Privacy 
The benefits of using a decentralised application that is tailored for securely storing patient information is that the patient can send these EMRs to healthcare providers or institutions regardless of the distance between the patient and the provider. (Hannah S Chen, 2019) This leaves patients more well informed about the nature of their health and how it can affect their life this results in patients being more attentive to their own health and making better life choices. 
Blockchain is built to be a resilient service that is equipped to deal with tampering and data breach attacks. However, there still is the concern of privacy for patients. Data could be moved and sold off without their consent. My application with have the addition of a storage layer and a data usage layer that is both handled by the Ethereum Swarm. This separation of how data is stored and how data is used and sent is essential to ensure that EMRs are in the power of the patient and not by an organisation to ensure proper security and functionality. (G. Zyskind, 2015)

2.5.2	Accessing and Storing EMRs
This application will be placing all patient EMRs in one private Ethereum blockchain by distributing that dataset amongst different blocks on the blockchain. Thus, each block is then encrypted and the chain of blocks containing a portion of the file data where that data is fully accessible by that respected patient. 



Chapter 3:	Requirements
No.	Requirements	Use cases
1	Users must Login	Logging into the webpage
2	Separate Login for Patients and Doctors	Different account prefixes logging in
3	Patients must be able to view their own uploaded medical files	Going to the page to see all their files 
4	Patients must be able to Upload Their medical data in a respected format	Going to the upload page and uploading a pdf
5	Patients must be able to obtain their hash for their respected uploaded file	The upload will result in adding the file to the chain and providing a hash
6	The system should be able to deploy the file on Swarm	The file is added to swarm’s root chunk
7	Users Must be able to see their files uploaded and their respected hashes/Timestamp on screen	their files with the title and hash and a last modified timestamp
8	Patients must be able to Enter a contact (e.g., Doctor, Medical research company) and give said contact viewing permissions	Th add doctor page creates a relationship between a doctor(s) account to a patient 
9	Doctors should be able to see files corresponding to said patient	Doctors with right permissions can see files
10	Doctors should be able to request files from patients	Doctors can send a request to patient
11	Doctors are not allowed to view patient data without a token 	Doctors receive a limited time token
12	Patients can control who has access to their data and the ability to revoke.	Patients have a page to manage persons that have access to files
		








No.	Non-Functional
1	Swarm should be successful in storing the data
2	No Delay in Giving/Revoking access
3	Doctor/Patient should have the correct data shown
4	Easy to upload/change access on the site

3.1	Use cases.

Use cases are a strong tool in the development of an application with the knowledge gathered from our Functional and non-functional requirements we can use these “use cases” to create a scenario from our abstract implementation of requirement. The use cases from the table we can use these to make sure that our features and functionality meet the standards of our use cases masking sure that our project prioritise these functionalities first.  
The following will describe a few main use cases that are preformed from our main actors which consist of the patient and the Doctor. 

Use case and description	Viewing Medical Files 
Actor(s)	Both Patients and doctors can view these files
Basic flow	The Patient navigates their way from the home page to the medical file view page.
They are prompted with a list of their files and a button to view them, respectively. 
Alternative flows 	Doctors must gain access to patient files and the patient can either accept the request or add them manually. 
Doctor must wait for this permission, as they obtain a list of files from various patients



Use case and description	Uploading a File  
Actor(s)	Patients only
Basic flow	Patients can navigate to the upload page where they are prompted to select a file and a title to submit   
Alternative flows 	Patients provide the wrong file format and /or the title is invalid/blank thus resulting in an upload error and a reload of the page












Chapter 4:	Design Plan
4.1	Truffle and Ganache: Application framework

The first item on our Blockchain developer toolkit is a personal private blockchain, in this application protype I will be using ganache to provide us with a private blockchain that has multiple accounts with mock ether. Ganache is a program that simulates a private blockchain on our localhost, it provides us will a closed network something akin to a sandbox blockchain that spins up a blockchain and runs on our computer locally. This is a powerful tool allowing development and deployment of smart contracts utilising ganache’s “fake” accounts and ether it offers. Furthermore, we are now able to run multiple use case tests that require gas and develop applications that ultimately talk to ganache blockchain. 







Figure 5 shows the Ganache application. This represents the blockchain that we can develop with. Ganache provides us with multiple accounts with a standard balance of 100ETH. This gives us the power to do multiple tasks stated above that would require gas to deploy thus Ganache provides us the balance and would take away ETH according to our gas prices. 
The next dependency is our framework which will. Truffle is a “world-class development environment, testing framework, for blockchains using the Ethereum aiming to make life as a developer easier.” Truffle is an all-in-one package that provides a suite of tools for us to develop smart contracts with, test these smart contracts and deploy these smart contracts to the blockchain and finally a robust development console to talk to our contracts at a low level. 
4.2	 React
My application is going to be built with JavaScript in mind, more specifically React.js the open-source JavaScript library. 
React allows developers to create web applications with the use of “state variables”. These are used to change data without reloading the page, variables on the page can change state thus updating themselves to match their new form that was given. Examples given on the react documentation include a to-do list that dynamically adds to the list when adding new points as the to-do lists’ state changes this updating without the requirement of a page refresh. 


React is a component-based library where in this case we can encapsulate specific functions within pages with their own complex states and functions. This provides a clean development process for my project as components such as “Adding Doctors” or “Upload a File” can have their state functions separate an out of the DOM. This ultimately speeds up my development time as we can write up the components with less code.  
4.3	 Web3
In the Web3, data is stored in multiple copies of a P2P network. The management and rules that are governed by the network are controlled by a democracy type style where changes or modification to the network must require a majority census from all the nodes to pass. This eliminates a single point of control as no one person has the absolute power to sway the nodes into agreeing to their rules.
Blockchain, as the backbone of the Web3, redefines the data structures in the backend of the Web now that we live in a connected world. It introduces a governance layer that runs on top of the current Internet, that allows for two people who do not know or trust each other to reach and settle agreements over the Web.

4.4	Metamask
Metamask is a browser extension (I will be using the Firefox version). We need to remember that the Ethereum blockchain is a Web3 network. Thus, we need a special browser extension to connect to this network. Metamask provides such facilities such as connecting us to the Ethereum blockchain and give us the ability to communicate with the smart contracts we created.

4.5	 Smart Contracts and Solidity

Solidity is a high-level and contract-oriented language used for writing smart contracts. It is used for designing and implementing smart contracts within the Ethereum Virtual Machine. (Solidity, 2018) With the power of Solidity, we can create contracts for real-life events such as voting, storing data, transferring crypto and multi signature wallets. Solidity provides developers the logic and libraries to enforce rules with smart contracts. Solidity is statically typed, supports libraries and complex user-defined types among other features. (Solidity, 2018)
Ownership of patient’s medical data comes to the forefront as we want patients to trust that their data is safe, secure and is ultimately controlled by them. Furthermore, we want to protect the patient from altering their data unintentionally or maliciously as these documents are sensitive and require the utmost priority that they are not to be tampered with in a negative way.
Introducing multi-signature Smart contracts. This is a collaboration of two parties agreeing on the deployment of a smart contract. In this field the parties included are the patients and the Hospitals that would want access to these documents. Both these parties have their own private keys, and both are required. One party cannot access the document without the other permissions as both need to be present to allow modifications. This is perfect for patients as they are still allowed to viewing permissions while restricting access. 





However, this creates a problem of security as accessing records and files and modifying would make them lose its integrity on the blockchain as once the data has been modified this would create a ripple effect due to the nature of how blockchain works. Modifying a file would lose its original contents thus requiring the attention of a new hash value being assigned to the respected file. We would lose the security as the blockchain would not keep track of the creation and modification of data. This is crucial information to know when handling sensitive data as EMRs thus requiring us to keep track of how the files change over time. The solution would be to use a “last accessed” timestamp feature to the files. A great extension for this is OriginStamp that would provide us the ability to track these modified files that we will talk about in the upcoming sections. 
4.6	Ethereum Swarm

Each medical record to be stored receives a unique swarm hash and private key for decryption form the root chunk. Patients who have uploaded their data to the swarm can be allowed access to their root chunk. Furthermore, they can allow access for other parties. In essence the chunk is securely controlled by our smart contract with Solidity.
I have chosen swarm over IPFS as my preferred storage method is that IPFS is based around peer-to-peer interactions which allow users to download files off other users. This is done in example; a file is stored on multiple nodes. A user would request to download said file by broadcasting a request to the nodes within the network. The response would lead to multiple nodes “seeding” the data over to the recipient. IPFS generally is a great way to create a simple decentralised data storage solution as there are no single point of attacks within the network therefore creating a safe way for files to exist without being tampered with. (IPFS, 2020)
 However, a situation could occur of a patient regularly asking for a specific file on a network. Example of me asking for my medical data “Nafiz.medical”. I regularly would request my data by broadcasting to the network that I would like to download this file. This is a grossly careless way of handling data transfer as people watching over the network can start deducing certain properties and patterns as an assumption could be made that a user constantly requesting the same file is most likely said patient.
This is where swarm fits our needs perfectly providing a decentralised private way to store these files on a blockchain by storing the files in chunks and thus slowing specific users in the network access to their root chunk.




4.7	OriginStamp

OriginStamp uses blockchain technology to provide a tamper-proof timestamp irrefutably proving the existence of any digital content at a given time. (OriginStamp, 2020) 
How this is conducted is that OriginStamp locally calculates a hash for the file. The hash algorithm being used is SHA257. 
An example of this would be sha256(“medical.file”) = 4ffe33264b72e6973eed98070f1118182380ddf287e813ce06d34b04e78824ed.

OriginStamp does the hash calculation locally on the application due to the nature of the file contents as especially in our application where we handle secure sensitive data it is advised to not sent plain text files over the web and OriginStamp upon request only requires the calculated hash function. Some files might be more proactive than other thus requiring several modifications to it, this however is a rare occasion. Editing files frequently would require the application to re-hash the file again and add it to the chain eventually this would yield high costs.   

OriginStamp deals with this this issue by deploying a Merkle tree. This is a simple concept of combining multiple file hashes and re-hashing the result to provide a new single timestamped hash is to reduce the cost factor of running a service that would require sending multiple hashes a day or even every minute. OriginStamp would combine hashes from multiple sources every minute and would combine these into one thus giving users lower costs to work with. 

















Chapter 5:	 Implementation and Testing
5.1	Setting up dependencies 
The first dependence we will need is Linux’s package manager NodeJS which includes the “npm” functionality. This supplies us with the basic framework on installing packages and libraries as we will be “npm installing” all future libraries this way therefore NodeJS is a cornerstone for the development of our project as it provides these packages and libraries with a simple CMD prompt install. 






Next dependence is the truffle framework, in short it helps us create decentralised applications and provides a nice suite of tools for us to use that will cut down development time and provide easy to use files and code that will connect the backend blockchain, our other packages and our frontend application. 







Ganache is a local and memory blockchain that we can use to help test our prototype application. Ganache is a subset of the truffle tools suite thus it is a perfect way for us to simulate a private blockchain to interact with.

		







In order to connect to Web3 and all the blockchains, as our current web browsers only connect to Web2, Metamask is a special browser extension to connect our personal blockchain ganache on web3. 



5.2	Setting up Boilerplate
Now that we have all our base dependencies installed, we can start working on our application. Truffle is a great way to start coding Decentralised applications as it provides us with multiple boilerplate examples for us to build upon. However, for my prototype application I will be using a boilerplate that is given by The GitHub repository of dappuniversity/starter_kit (dappuniversity, 2019)
The starter_kit is based on the Truffle “pet shop pack”. The petshop pack gives us the basic functionality to create an Ethe (dappuniversity, 2019)rerum Dapp. However, the Starter_kit adds more features that creates all the necessary code to setup a distributed file system whether it be IPFS or Ethereum Swarm. 
Looking at the file structure given,
We have the setting files and package files/directories.
The Contracts and migration folders are very important to the application. They are the foundation of how our application functions. Contracts
directories contain our solidity smart contracts they contain the functionality and backend to our application. Later, in the implantation chapter we explain how we create these contracts and the functionality they bring to the application. Migrations briefly is the deployment of our contracts the truffle framework handles all the migrations via the CMD prompt. 




5.3	The Medical.Sol Contract
The boilerplate provides us with a contracts directory that includes a migrations.sol this solidity file includes the functionality for us to migrate the contracts we create. 
This eases the creation of contracts for us as the steps taken include creating a new smart contract and thus migrating it to the blockchain via a truffle command. This utilises the migrations file to create a new instance of our smart contract that is held in migrations.  






Moving on to our main solidity smart contract which is the Medical.Sol file. Solidity allows us to create our own structure types and we are going to do that with our key objects that we need to create and that are going to interact with each other. 
The medical smart contract includes the structures for our main users which are the patients and their corresponding doctors that they will assign to allow them access to their files which we will go in depth later. 
The patient structure includes all the data that we require from the user upon the registration process, our application requires the user to register with us providing their full name, number, and email. The structure also accounts for a randomly generated ID value to be assigned to each created user that is their unique identifier that will set them apart. 
Furthermore, the patient structure includes a “filecount” and a “doctorcount” variable. Firstly, the file count keeps track of the number of files added to the user’s account. My application takes into consideration that a patient might be willing to store multiple medical records and it is an essential to keep track of them. 
DoctorCount is very much similar to the FileCount as it shows how many doctors have access to their files and thus has the problems as the FileCount which prompts the use of a counter.
Moving onto our next structure which is the FileData itself. The main feature of this application is submitting files onto the blockchain via a hashed file that is stored on Ethereum swarm and the hash being on the chain. We require basic information about the file being the name, hash and the datetime. All these variables are crucial for the file in different ways. The name is stored to help the patient identify files when viewing several of them. Moving onto the hash variable which is the cornerstone of the whole structure. This variable stores the SHA256 hash which is created upon uploading the file to swarm. This is how we retrieve the file from our chain to view as the blockchain provides us a tamper proof way to store this hash and giving the ability for patients to view their file. This will be shown later in the implantation.
Finally, the datetime is required as this will serve as a last accessed variable for our OriginStamp. Discussed in our design plan the OriginStamp help us retain earlier versions of a document once it has been modified therefore providing a proof of history for these files. 




Next place we need is a way to store our structure types that we have created through a mapping function. A mapping in solidity draws similarities to a dictionary in other languages or in other words a hash key. This is where we associate key value pairs, we declare this mapping with a mapping keyboard and then we declare the types of the arguments we expect to pass through each key and value pair.
In this case there are three mapping functions that are created are addresses being assigned to our data structures. The first mapping shows the ids being mapped to each patient we create and thus making this mapping public allows us to call and fetch the data from patients as this is a feature of solidity. The other two mapping follows an almost same pattern where the address is attached to the file and doctors. This is created in this manner as the files and doctors are associated with the patients. Then we move onto the inner mapping which simples assigned an unsigned integer to each variable as an identifier. 







The next figure shows the main solidity functions that are contained in our smart contract. The first function described is “saveFile”. This is a simple function that attaches the file that is uploaded to its corresponding patient, this function is not to be mistaken with the uploading of the file to the Swarm. The smart contract strictly only governs the rules of how the data is handled thus the smart contract cannot hold the file data in memory. The exception to this is the mapping. However, the mapping is something akin to a basic dictionary that has key: value pairs.
The function is solely there to attach the file to the patient structure and incrementing the filecount by 1. Furthermore, the way the file is uploaded in swarm is done by the front-end application which we will talk about in the next section. The front-end is responsible for uploading the file to the Ethereum swarm root node and the chain to hold thew hash function. This also includes retrieving files to view.  


5.4	 The front-end Application

We can now move onto our front-end application, this has most thew logic of our application, as the backend is mainly generated from our pre-existing boilerplate curtesy of Dapp University. The only back-end additions that the application needed work on was the main Medical.sol Smart contract file which handles the blockchain aspect of our application which holds the logic and hashes for our files. 
Our front-end focuses on parsing the data that is entered by the patient. All the pages such as “Registration”, “Upload”, “Add Doctor”, all require the data to be cleansed and sent to the swarm and handled by our smart contract. 

5.4.1	The App File

Our app.js serves as somewhat of an index or root file for our application. Here we can define baseline functions and objects that we can extend to our components that this section will dive into. We can configure all our settings and function via this file.
Firstly, we can look at the renderer which actually does not render anything on screen to our index path (that is done via our home file in the components). The render instead holds our Browser navigation which is done curtsy of React-router-dom library.
(import {BrowserRouter, Route} from 'react-router-dom')
This library helps us create paths to our components. A close relative to this is Python Django’s urls.py where we can assign raw routes for files in our components as url paths. For example, in the figure below we have a root path for our Home file, and we pass in the metadata for our patients account in. This is also the replicated by the other paths such as upload and view.









Our render also contains a decision. A “if (this. state. loading === false)” This statement checks whether our loading state variable is false. Additionally, this is decided by how our app mounts to the web3.js service. 
The application requires the use of Metamask to talk to web3. Thus, we need the web3 libraries to turn the application into a Dapp. The figure below shows two essential functions that allow our application to talk to the web3 service. The first function is the LoadWeb3. This function sets up web3 and connects to the blockchain. The web3 in tandem with the Metamask extension checks whether you are connected to an Ethereum provider or a Web3 provider. Essentially Metamask places a Ethereum object or a web3 object into our browser. If none are available, we have a fallback alert window pop up, explaining to the user that they require Metamask to connect to our application. We need Metamask installed as a browser plugin as that is the power tool to help us sign transactions and place our file data onto the blockchain. 
Componentwillmount is a lifecycle hook which comes for free in react. What it does is that it allows our components to attach itself to reacts virtual DOM. When this is initialised, we call the web3 function and the loadblockchain function we will explain later in the section. 
These functions are asynchronous which makes our application wait for the response of Metamask to continue. 









Now we load all the information from the blockchain like the account we relate to and our patient data corresponding to that account hash. We have a list of elements that we need to obtain from the blockchain including the network and the smart contract that we have deployed.   
Firstly, we obtain the account that the user is connected to via the first two lines accessing the “web3.eth.getAccounts() “this package allows us to interact with Ethereum and the smart contracts, returning all the accounts in the current Ethereum wallet. In this use case the user would only have one hash in their wallet while using the Metamask extension. 
 When dealing with our smart contract we require two things. Firstly, we need the ABI for our smart contract And Secondly, we need the address.
ABI is the application binary interface, the functionality of this is to deal with how function calls are handled in our contract upon sending a callback.  We need the ABI to access the functions in our contract. Our React application already holds our ABI’s for the smart contract in its own folder. This contains a Json file of the same name as the Smart contract.
Next the address is quick and simple. With the use of the network id obtained from our Blockchain we can find its corresponding address. 
Finally, we assign our patient information from our smart contract with the help of the address and the ABI we can now talk to the functions contained within. This results in us being able to set the patient data as a state variable. When this I complete, we can now set the loading to false which allows us to access the application. Without it the application will be inaccessible for security reasons 















5.4.2	The Home Page


	








The Homepage is made up of a simple explanation of the functionality of my application, how we utilise blockchain technology and permissioned ledger to store medical data. This is accompanied by a list of the technologies that were used in the application that powers the back end and the front-end. Additionally, we have the account hash of the user. In this prototype we are using the ganache personal blockchain accounts that are connect to the application via Web3 through the Metamask Plugin. 
Finally, to navigate through the pages the homepage has the sidebar feature. This will navigate the user to the other pages. Which are:
•	Uploading a medical file
•	Viewing the medical files
•	Adding a Doctor, giving them permissions to view our page.

5.4.3	The Upload Page










The rendering of the upload page is fairly simple, only providing what is needed to the user which attends to Norman’s law as the user is inclined to understand the functionality of the page from the get-go rather than making the process intricate and complex. I have opted to go for this simple approach. However, with this simplistic design the upload page has a lot of complex logic built in dealing with the parsing of the file. sending it our Ethereum swarm chunk and the hash to the Ethereum blockchain. 
The page goes as follows. There is a default Metamask image, with the patients hash id followed by a few conditions and notes. The Metamask image is just a placeholder until the user uploads their file in our application, upon choosing a medical file and submitting the Metamask image will change providing a snapshot display of what they have sent to give clarity and some feedback to the submission process. 






Here Is the HTML for the form of the render portion of the file.  this form has three react js functions attached to it. The main function being the on submit function when the form is being processed and the other two functions deal with the parsing of the data that is inputted.

State variables differ from classical variables as the react application updates these to the page in real time. For example, a to-do-list in a website can dynamically change when updating these state variables whether it be adding to the list or removing.  






The state variables I am using for the file handling is the buffer, fileHash fname and sfile. These four state variables hold the meta information for the files. Quite simply sFile holds the meta data for the file whereas the fname holds the title that is also inputted by the user via the form. 
Buffers are a little more complex and intricate, we use the filereader object which lets us asynchronously read the contents of the raw data buffer stored on the user’s computer. Finally, the FileHash is used to send to the Ethereum swarm and our blockchain. 
These two functions correspond to the functions that are called within the render of the form. 
The first function is a captureFile function in react. This function sends the meta data of the file being uploaded when the user selects a file. This occurs after the file has been selected but before the submission of the form. Our react app uses states to hold the meta information of our file.  We use the setState function to assign the event target that we received and map it onto our corresponding state variable.
The second function is the handleInputChange this is just so we can assign the name to our state variables.
We then move onto our main Onsubmit function which allow us to use our state variables and send it to our toot chunk in the Ethereum swarm this will then be accessed by our view page that will show a list of all the medical files associated with said patient.

The next section is adding our file meta data to the blockchain. With the smart contract that we went through in section 5.3 the smart contract assigns the variables that we pass through to the File struct that we define. Thus, we can then map that file to a patient struct which forms a relationship between the two. 

5.4.4	The View Page











The view page allows the patients to see their uploaded medical data. The renderer loops through all existing files related to the patient and renders them to the screen this is how we have multiple article elements tied to the number of files that the user has uploaded. Here we can see that tis patient has uploaded two files. “My Details” and “Corona Test”. Both these files are very different from each other in a medical standpoint however both can co-exist in the same eco-system. The files are placed in article elements which allows us to cleanly represent the files uploaded data, the title, and a button to view the corresponding file. This allows patients and the Doctors to see the sensitive files with permissions granted by the patient.





	


5.4.5	Add patient/Doctor Page.











This page is simple as the upload page however I decided to save screen space to split the Upload and View of files into separate webpages. In the add Patients/doctors since the page is similar however swaps the account prefixes around which is initialised in our registration process. This use case investigates a patient checking in on its permissioned Doctors. In another use case another scenario can take place which is doctors checking in on patients that have given them permissions. 
The figure above provides the patient with a form to enter the doctors account and name which then creates a relationship between the two entities.
When talking about the Doctor.js file it is very similar to how the upload file operates. Both files cleanse the data and stores the results of the form in their corresponding state variables.  They both attach the file to the patient via the smart contract set up. 
5.5	 The Testing

No.	Requirements	Use cases
1	Users must Login	Logging into the webpage
2	Separate Login for Patients and Doctors	Different account prefixes logging in
3	Patients must be able to view their own uploaded medical files	Going to the page to see all their files 
4	Patients must be able to Upload Their medical data in a respected format	Going to the upload page and uploading a pdf
5	Patients must be able to obtain their hash for their respected uploaded file	The upload will result in adding the file to the chain and providing a hash
6	The system should be able to deploy the file on Swarm	The file is added to swarm’s root chunk
7	Users Must be able to see their files uploaded and their respected hashes/Timestamp on screen	their files with the title and hash and a last modified timestamp
8	Patients must be able to Enter a contact (e.g., Doctor, Medical research company) and give said contact viewing permissions	Th add doctor page creates a relationship between a doctor(s) account to a patient 
9	Doctors should be able to see files corresponding to said patient	Doctors with right permissions can see files
10	Doctors should be able to request files from patients	Doctors can send a request to patient
11	Doctors are not allowed to view patient data without a token 	Doctors receive a limited time token
12	Patients can control who has access to their data and the ability to revoke.	Patients have a page to manage persons that have access to files
		


Chapter 6:	 Conclusion

6.1	Achievements 
The conclusion of this report allows us to reflect on the components of our application. My thoughts are that the project is able to meet the requirements set out in chapter 3 and is able to tackle and achieve above our problem statement that we set out in chapter 1. The application turned out to be very simple exterior front end with a complex and intricate backend. In essence the application gives off the perception that it is a file uploading site. However, in the backend there are many mechanisms here at play from the communication of the smart contract to the storage space provided by Ethereum swarm. My application is very robust and can extend beyond the requirements and problem statement that I set out in the beginning of the report. 
The project turned out to be a success with meeting all the goal I set out to achieve, as focusing and researching upon the different technologies I could have incorporated I am very confident that the approach I have taken reinforces the goals of security and transparency between patient and Medical institutions. My application puts the patient first empowering them with their own data and building the network around this actor. Providing an online Dapp for patients is a perfect platform for them to interact and use. Technology continues to grow, and its outreach of smart phones grow therefore being the perfect opportunity to utilise this mobile and ready to use advantage that users have with smart phones. 
While searching on my literature review many different DLT cropped up. Whether to use IBMs Hyperledger platform or to use Ethereum. Whether to have a private to public blockchain? Or how the data will be stored. Originally the project was set out to use a public blockchain with the IPFS as a backbone to store files. However, this turned out to be a very dangerous way to store sensitive files such as blockchain therefore the project roadmap morphed into a public blockchain providing a “Proof of Existence” in tandem with an off-chain solution to store medical data via the Ethereum swarm. 
6.2	Challenges faced.

Researching about the best possible way to achieve my goals and requirements was very difficult as going down one route just to find conflicting problems that do not agree with the problem statement was infuriating. However, with the help of a few journal articles such as the reform and “Blockchain-Based Medical Records Secure Storage and Medical. Journal of Medical Systems,” have really showed me the depth and level of complexity that a simple application like the own built here can be. The decision to use Ethereum and ethereum Swarm was chosen from a pure rechnological standpoint. This perefence as it is the most popular network to build applications for thus provising me with a lot of skillbuilding opptunities that other networks struggled to give. Seeing beyond the stanadrd documentation really enchanved my skills and understanding on the intricacies of a blockchain netwoiek such as etherem. Which is a farcry from December during the research periods of the application where I struggled to even understand how to create transactions and add to the blockchain. 
However, that aside the actual technicality of the project is still to be desired. The prototype in its current form only serves as a mere baseline to build upon which presents itself as a barebones application that uploads files and their metadata onto the blockchain. On the other hand, I am confident in the ability of my application to still provide the functionality that I set out to create. Additionally, the applications purpose was to serve as a proof of concept and is very underdeveloped for commercial use. However, it does provide the functionality needed to do so. 



















References
A. Azaria, A. E. T. V. a. A. L., 2016. sing Blockchain for Medical Data Access and Permission Management. 2016 2nd International Conference on Open and Big Data , pp. 25-30.
A. Dorri, S. S. K. R. J. a. P. G., 2017. Blockchain for IoT security and privacy: The case study of a smart home. 2017 IEEE International Conference on Pervasive Computing and Communications Workshops, pp. 618-623.
BitDegree, 2011. Centralized vs Decentralized: What’s the Difference?. [Online] 
Available at: https://www.bitdegree.org/crypto/tutorials/centralized-vs-decentralized#what-does-decentralization-mean
[Accessed 12 December 2021].
C. Esposito, A. D. S. G. T. H. C. a. K. R. C., 2018. Blockchain: A Panacea for Healthcare Cloud-Based Data Security and Privacy. IEEE Cloud Computing, 5(1), pp. 31-37.
dappuniversity, 2019. githuib. [Online] 
Available at: https://github.com/dappuniversity/starter_kit
[Accessed 1 Janurary 2021].
Elena Karafiloski, A. M., 2017. Blockchain solutions for big data challenges. " IEEE EUROCON 2017 -17th International Conference on Smart Technologies, pp. 763-768.
Ethereum Swarm, 2021. Ethereum Swarm. [Online] 
Available at: https://swarm.ethereum.org/
[Accessed 3 March 2021].
Ethereum Swarm, 2021. Ethereum Swarm Documentation. [Online] 
Available at: https://swarm-guide.readthedocs.io/en/latest/introduction.html
[Accessed 3 March 2021].
Ethereum, 2020. Ethereum. [Online] 
Available at: https://ethereum.org/en/developers/docs/
[Accessed 21 11 2020].
G. Zyskind, O. N. a. A. '. P., 2015. "Decentralizing Privacy: Using Blockchain to Protect Personal Data,. IEEE Security and Privacy Workshop, pp. 180-184.
Griggs, K. O. O. K. C. e. a., 2018. Healthcare Blockchain System Using Smart Contracts for Secure Automated Remote Patient Monitoring. J Med Syst, p. 130.
guru99, 2021. Blockchain Tutorial: Learn Blockchain Technology. [Online] 
Available at: https://www.guru99.com/blockchain-tutorial.html#2
[Accessed 21 Feburary 2021].
H. Watanabe, S. F. A. N. Y. M. A. A. a. J. K., 2016. Blockchain contract: Securing a blockchain applied to smart contracts. IEEE International Conference on Consumer Electronics , pp. 467-468.
Hannah S Chen, J. T. J. K. A. C. D. S. C. X. H., 2019. Blockchain in Healthcare: A Patient-Centered Model, s.l.: Biomed J Sci Tech Res.
IPFS, 2020. IPFS. [Online] 
Available at: https://docs.ipfs.io/concepts/how-ipfs-works/#content-addressing
[Accessed 22 11 2020].
Kai Fan, S. W. Y. R. H. L. ,. Y. Y., 2018. MedBlock: Efficient and Secure Medical Data Sharing Via Blockchain. J Med Syst, Volume 136, p. 42.
Loi Luu, D.-H. C. H. O. P. S. A. H., 2016. Making Smart Contracts Smarter. Vienna, Association for Computing Machinery, New York ,NY, United States.
MetaMask, 2021. MetaMask. [Online] 
Available at: https://metamask.io/
[Accessed 1 April 2021].
OriginStamp, 2020. OriginStamp docs. [Online] 
Available at: https://docs.originstamp.com/
[Accessed 10 April 2021].
reform, 2021. Blockchain in the NHS. [Online] 
Available at: https://reform.uk/sites/default/files/2018-12/Blockchain%20in%20the%20NHS%20-%20VF_1.pdf
[Accessed 27 Feburary 2021].
Solidity, 2018. Solidity Documentation. [Online] 
Available at: https://docs.soliditylang.org/
[Accessed 23 Feburary 2021].
Tron, V., 2016. Swarm alpha public pilot and the basics of Swarm. [Online] 
Available at: https://blog.ethereum.org
[Accessed 23 January 2021].
Truffle, 2021. Trufflesuite. [Online] 
Available at: https://www.trufflesuite.com/
[Accessed 23 March 2021].
Vazirani, A. O. O. B. D., 2020. Blockchain vehicles for efficient Medical Record management.. Digit. Med, pp. 3-1.
Web3.js, 2021. Web3.js Documentation. [Online] 
Available at: https://web3js.readthedocs.io/en/v1.3.4/
[Accessed 23 April 2021].
X. Liu, Z. W. C. J. F. L. a. G. L., 2019. A Blockchain-Based Medical Data Sharing and Protection Scheme. IEEE Access, pp. 118943-118953.
Yi Chen, S. D. Z. X. H. Z. S. Y., 2019. Blockchain-Based Medical Records Secure Storage and Medical. Journal of Medical Systems, pp. 43-5.


entralised solution to store medical data using the Ethereum Blockchain. 
