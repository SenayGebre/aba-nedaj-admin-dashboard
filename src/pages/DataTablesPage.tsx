import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import  App  from '@app/components/tables/attendant_table/attendant_table';
const DataTablesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('Attendant')}</PageTitle>
      <App />
    </>
  );
};

export default DataTablesPage;
