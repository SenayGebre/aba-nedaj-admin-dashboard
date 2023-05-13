import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import Business from '@app/components/Business/Admin';
const BusinessPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.GasStations')}</PageTitle>
      <Business />
    </>
  );
};

export default BusinessPage;
