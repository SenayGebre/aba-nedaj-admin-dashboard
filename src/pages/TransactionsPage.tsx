import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import  Transaction  from '@app/components/tables/transaction_table/transaction_table';
const TransactionsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.transaction')}</PageTitle>
      <Transaction />
    </>
  );
};

export default TransactionsPage;
