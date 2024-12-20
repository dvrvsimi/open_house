# OpenHouse: Decentralizing the Housing Process in Nigeria
![logo name](./docs/open%20house%20brand%20assets/logo-name-without-bg.png)
## Design Story

### The Problem

Meet Sarah, a young professional who just accepted a job offer in a new city. Like millions of others, she needs to find a place to live. The traditional route seems simple: contact real estate agents, schedule viewings, and find a home. But Sarah's experience, like many others, quickly becomes frustrating:

- She pays multiple inspection fees, often for properties that don't match her needs
- Agents show her properties in areas they prefer, not where she wants to live
- Hidden fees keep piling up: agency fees, agreement fees, caution fees
- The total cost becomes almost half her annual rent
- She can't get honest reviews about the properties or neighborhoods

### The Vision

Imagine instead a world where Sarah opens the OpenHouse dApp:

1. She browses a curated list of properties, each with high-quality photos and detailed information
2. Community members (we call them "Scouts") have documented these properties, earning tokens for their contributions
3. Each listing has anonymous, verified reviews from previous viewers and tenants
4. Virtual tours and detailed neighborhood information help her narrow down choices
5. When she finds a property she likes, she pays a small fee to get the location and contact details
6. After viewing, she contributes her review, earning tokens and helping others

### The Revolution

OpenHouse isn't just another rental platform – it's a community-driven ecosystem that:
- Eliminates unnecessary middlemen and their excessive fees
- Rewards community members for contributing valuable information
- Creates transparency through anonymous, verified reviews
- Builds trust through blockchain verification
- Reduces rental costs for tenants
- Creates new earning opportunities for community members

### Try the Demo!
Follow the steps below to reproduce the environment and try Open House

## Requirements
Ensure you have the following installed on your local machine:

- Node.js (v16 or above)
- Yarn or npm
- Rust (via rustup)
- Anchor CLI (version 0.29.0 or later)
- Solana CLI (version 1.16.0 or later)
- A Solana wallet (for testing)

## Project Setup
1. **Clone the Repository**
Clone the forked GitHub repository to your local machine:

```bash
git clone https://github.com/yourusername/open-house.git
cd open-house
```

2. **Solana Program**
The backend consists of a Solana program deployed using Anchor.

*Step 2.1: Install Dependencies*
Navigate to the programs/open_house directory and build the program:

```bash
cd code/anchor/programs/open_house
anchor build
```

*Step 2.2: Configure the Wallet*
Ensure you have a wallet with SOON testnet tokens:

If you don't have an existing keypair, run:
```bash
solana-keygen new --outfile ~/.config/solana/id.json
```
> To create a new one, remember to use to `--force` flag or change the name and/or path of the JSON file


Airdrop SOL for testing:
This program is currently deployed on SOON testnet. To get some tokens, head over to [SOON faucet](https://faucet.soo.network/) to request some.

*Step 2.3: Deploy the Program*
Run `solana config get` to confirm that your configuration is properly set up, it should return output below:
![alt text](./docs/open%20house%20brand%20assets/image.png)

Update the `Anchor.toml` file with SOON testnet configuration, follow the official [network information sheet](https://docs.soo.network/using-soon/network-info):
```bash
[provider]
cluster = "https://rpc.testnet.soo.network/rpc"
wallet = "~/.config/solana/id.json" # filepath to the generated keypair 
```

Deploy the program by running `anchor deploy` in your anchor project folder. After deployment, note the program ID from the output or your `target/deploy/open_house-keypair.json file`

3. Frontend (React/Vercel App)
The front end is built with React and deployed on Vercel.

*Step 3.1: Navigate to the Frontend Directory*

```bash
cd web
```

*Step 3.2: Install Dependencies*
Install the project dependencies:

`yarn install` or `npm install`

*Step 3.3: Update Environment Variables*
Create a `.env.local` file in the app directory with the following values:

```bash
NEXT_PUBLIC_SOLANA_NETWORK=testnet
NEXT_PUBLIC_PROGRAM_ID=<YOUR_PROGRAM_ID>
NEXT_PUBLIC_RPC_URL=https://rpc.testnet.soo.network/rpc
```
Replace `<YOUR_PROGRAM_ID>` with the program ID from Step 2.3.

*Step 3.4: Start the Development Server*
Run the React app locally: Use `yarn dev` or `npm run dev`. Visit http://localhost:3000 in your browser to see the app in action.

## Troubleshooting
- **Anchor CLI Errors**: Ensure your Anchor CLI is up-to-date:
```bash
anchor --version
```

Upgrade with:
```bash
cargo install --git https://github.com/coral-xyz/anchor anchor-cli --locked
```
- **Solana Network Issues**: Check your Solana CLI configuration:
```bash
solana config get
```
- **React App Not Starting**: Verify that your `.env.local` file has the correct variables.

- **Program Deployment Issues**: Confirm you have enough SOL tokens by running:
```bash
solana balance
```

## Contributing
We welcome contributions! Please fork the repository and submit a pull request with your improvements.
