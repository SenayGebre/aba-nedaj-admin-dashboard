import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import  App  from '@app/components/tables/chiefs_table/chiefs_table';
const ChiefsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.chiefs')}</PageTitle>
      <App />
    </>
  );
};

export default ChiefsPage;
