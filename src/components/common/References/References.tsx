import React from 'react';
import * as S from './References.styles';
import { FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <S.Text>
        Made by{' '}
        <a href="https://www.amharabank.com.et" target="_blank" rel="noreferrer">
          Amhara Bank{' '}
        </a>
        in 2023. {' '}
       </S.Text>
      <S.Icons>
      s</S.Icons>
    </S.ReferencesWrapper>
  );
};
