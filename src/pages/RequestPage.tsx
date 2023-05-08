import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import  Request  from '@app/components/tables/request_table/request_table';
const RequestPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.request')}</PageTitle>
      <Request />
    </>
  );
};

export default RequestPage;
