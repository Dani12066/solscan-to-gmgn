# Solscan to GMGN Redirect

A Chrome extension that adds a floating "View on GMGN" button on [Solscan](https://solscan.io) wallet pages, letting you quickly open the same Solana address on [GMGN Analytics](https://gmgn.ai).

## Features

- Floating button on every Solscan account/wallet page
- One-click redirect to GMGN Analytics for the same wallet address
- Clean, non-intrusive UI with hover animations

## Installation

1. Clone or download this repository
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select the project folder
5. Navigate to any wallet page on [solscan.io](https://solscan.io/account/) to see the button

## How It Works

When you visit a Solscan account page (e.g. `https://solscan.io/account/<address>`), the extension extracts the wallet address from the URL and injects a floating button. Clicking it opens `https://gmgn.ai/sol/address/<address>` in a new tab.

## Project Structure

```
solscan-to-gmgn/
├── manifest.json   # Extension configuration (Manifest V3)
├── content.js      # Content script - button injection logic
└── styles.css      # Button styling
```

## Tech Stack

- Chrome Extensions API (Manifest V3)
- Vanilla JavaScript
- CSS3

## License

MIT
