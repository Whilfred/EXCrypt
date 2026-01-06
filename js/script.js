document.addEventListener('DOMContentLoaded', () => {
  const acheterForm = document.getElementById('acheterForm');
  const vendreForm = document.getElementById('vendreForm');

  if (acheterForm) {
    acheterForm.addEventListener('submit', e => {
      e.preventDefault();
      const crypto = acheterForm.crypto.value;
      const montant = acheterForm.montant.value;
      const wallet = acheterForm.wallet.value;
      alert(`Achat simulé : ${montant} ${crypto} → wallet ${wallet}`);
    });
  }

  if (vendreForm) {
    vendreForm.addEventListener('submit', e => {
      e.preventDefault();
      const crypto = vendreForm.crypto.value;
      const montant = vendreForm.montant.value;
      const momo = vendreForm.momo.value;
      alert(`Vente simulée : ${montant} ${crypto} → Mobile Money ${momo}`);
    });
  }
});
