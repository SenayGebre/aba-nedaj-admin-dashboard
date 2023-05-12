import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import Admin from '@app/components/CRUD/Admin';

const AdminPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('AdminPage')}</PageTitle>
      <Admin />
    </>
  );
};
export default AdminPage;