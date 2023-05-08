import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import Drivers from '@app/components/tables/drivers_table/drivers_table';
const DriversPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('drivers')}</PageTitle>
      <Drivers />
    </>
  );
};

export default DriversPage;
