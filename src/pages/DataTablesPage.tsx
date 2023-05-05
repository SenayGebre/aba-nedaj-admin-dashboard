import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import  App  from '@app/components/table/table';
const DataTablesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.tables')}</PageTitle>
      <App />
    </>
  );
};

export default DataTablesPage;
