import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import  CarTable  from '@app/components/tables/car_table/car_table';
const CarsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('CarTable')}</PageTitle>
      <CarTable />
    </>
  );
};
export default CarsPage;