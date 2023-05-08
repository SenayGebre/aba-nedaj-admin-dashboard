import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import  Car  from '@app/components/tables/car_table/car_table';
const CarsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('attendantForm')}</PageTitle>
      <Car />
    </>
  );
};
export default CarsPage;