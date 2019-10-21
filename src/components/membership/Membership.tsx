import React from 'react';

// import { RecordedBooksTitle, RecordedBooksSignedIn } from './recorded-books/RecordedBooks';
import './Membership.css';

import { Header } from '../shared/header/Header';
import { Footer } from '../shared/footer/Footer';
import { CurrencyDropdown } from '../shared/currency-dropdown/CurrencyDropdown';

import { GiveDetails } from './give-details/GiveDetails';
import { SignUpForm } from './give-details/forms/signup/SignUpForm';
import { SignInForm } from './give-details/forms/signin/SignInForm';

import { OrderItem } from './order-item/OrderItem';

import { Legal } from './legal/Legal';

export const Membership: React.FC = () => {
  const membershipStore = 'RECORDEDBOOKS';

  // function isRecordedBooks() {
  //   return (membershipStore === 'RECORDEDBOOKS');
  // }
  // function giveDetailsTitle() {
  //   if (isRecordedBooks()) {

  //   }
  // }

  return (
    <div>
      <Header />
      <div className="page-wrap" id="contentSection">
        <div className="give store container">
          <GiveDetails />
          <SignUpForm />
          <SignInForm />

          <CurrencyDropdown />
          <OrderItem />

          <Legal />
        </div>
      </div>
      <Footer />
    </div>


  // 	<div id="reviewPurchaseModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="reviewPurchaseLabel">
  // 		<div class="modal-dialog">
  // 			<div class="modal-content">
  // 				<div class="modal-header">
  // 					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
  // 					<h4><atv:il8n var="CANCELED-ORDER" /></h4>
  // 				</div>
  // 				<div class="modal-body">
  // 				</div>
  // 				<div class="modal-footer">
  // 					<button class="btn btn-primary" data-dismiss="modal">
  // 						<atv:il8n var="CONTINUE" />
  // 					</button>
  // 				</div>
  // 			</div>
  // 		</div>
  // 	</div>
  );
};
