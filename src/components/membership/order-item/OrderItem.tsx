import React from 'react';
import './OrderItem.css';
import { MembershipItem } from './membership-item/MembershipItem';
import { GiftItem } from './gift-item/GiftItem';
import { Checkout } from './checkout/Checkout';

export const OrderItem: React.FC = () => {
  return (
    <div>
      <MembershipItem />
      <GiftItem />
      <Checkout />
    </div>
  );
};
