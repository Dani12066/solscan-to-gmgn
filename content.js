// Extract the wallet address from the current URL path
function getWalletAddress() {
  const pathParts = window.location.pathname.split('/');
  const walletIndex = pathParts.indexOf('account') + 1;
  return pathParts[walletIndex] || '';
}

// Create and inject the redirect button into the page
function createRedirectButton() {
  const walletAddress = getWalletAddress();
  if (!walletAddress) return;

  const button = document.createElement('button');
  button.className = 'gmgn-redirect-btn';
  button.textContent = 'View on GMGN';
  button.title = 'View this wallet on GMGN Analytics';

  button.addEventListener('click', () => {
    window.open(`https://gmgn.ai/sol/address/${walletAddress}`, '_blank');
  });

  document.body.appendChild(button);
}

// Wait for the DOM to be ready before injecting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createRedirectButton);
} else {
  createRedirectButton();
}