import React from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    React.useState(false);

  function handleOpenNewTransactinoModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactinoModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactinoModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactinoModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
};

export default App;
