import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import  App  from '@app/components/new_form/attendant_form/AttendantForm';
const AttendantPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('attendantForm')}</PageTitle>
      <App />
    </>
  );
};
export default AttendantPage;