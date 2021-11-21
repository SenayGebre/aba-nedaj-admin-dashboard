import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './VerifyEmailForm.styles';
import { FormWrapper, FormTitle, BackWrapper, BackIcon } from 'components/layouts/auth/AuthLayout.styles';
import { VerificationCodeInput } from 'components/common/VerificationCodeInput/VerificationCodeInput';
import VerifyEmailImage from 'assets/images/verify-email.png';

export const VerifyEmailForm: React.FC = () => {
  const { t } = useTranslation();
  const [verifyCode, setVerifyCode] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (verifyCode.length === 6) {
      setTimeout(() => {
        history.push('/');
      }, 500);
    }
  }, [verifyCode]);

  return (
    <FormWrapper>
      <Form layout="vertical" requiredMark="optional">
        <BackWrapper onClick={() => history.goBack()}>
          <BackIcon />
          {t('common.back')}
        </BackWrapper>
        <S.ContentWrapper>
          <S.ImageWrapper>
            <Image src={VerifyEmailImage} alt="Not found" preview={false} />
          </S.ImageWrapper>
          <FormTitle>{t('verifyEmail.title')}</FormTitle>
          <S.VerifyEmailDescription>{t('verifyEmail.description')}</S.VerifyEmailDescription>
          <VerificationCodeInput autoFocus onChange={(value) => setVerifyCode(value)} />
          <S.NoCodeText>{t('verifyEmail.noCode')}</S.NoCodeText>
        </S.ContentWrapper>
      </Form>
    </FormWrapper>
  );
};