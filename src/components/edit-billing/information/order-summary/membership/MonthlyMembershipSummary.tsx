import React from 'react';

export const MonthlyMembershipSummary: React.FC = () => {
  return (
    <tbody>
      <tr>
        <th className="item-name" colSpan={2}>
            ACORN-MONTHLY-MEMBERSHIP
        </th>
      </tr>
      <tr>
        <td className="qty">
            QTY" 1
        </td>
        <td className="price text-right">
            USD$0 each
        </td>
      </tr>
    </tbody>
  );
};
