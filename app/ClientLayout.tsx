// 리덕스 사용법 : https://hohome-develop.tistory.com/6
"use client";

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <main>{children}</main>
    </Provider>
  )
};