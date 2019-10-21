import React from 'react';

export const GiftMembershipSummary: React.FC = () => {
  return (
    <tbody>
      <tr>
        <th className="item-name" colSpan={3}>GIFT-MEMBERSHIP</th>
      </tr>
      <tr>
        <td className="qty">
        Qty: 0
        </td>
        <td className="price text-right">
        USD$0 each
        </td>
      </tr>
    </tbody>
  );
};
