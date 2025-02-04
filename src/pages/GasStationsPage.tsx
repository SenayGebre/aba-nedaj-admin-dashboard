import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import GasStations from '@app/components/GasStation/Admin';
const GasStationsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.GasStations')}</PageTitle>
      <GasStations />
    </>
  );
};

export default GasStationsPage;
