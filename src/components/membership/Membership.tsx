import React from 'react';

// import { RecordedBooksTitle, RecordedBooksSignedIn } from './recorded-books/RecordedBooks';
import './Membership.css';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { GiveDetails } from './give-details/GiveDetails';
import { SignUpForm } from './give-details/forms/signup/SignUpForm';
import { SignInForm } from './give-details/forms/signin/SignInForm';
import { CurrentDropdown } from './currency-dropdown/CurrencyDropdown';
import { OrderItem } from './order-item/OrderItem';

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

          <CurrentDropdown />
          <OrderItem />

          <div className="legal">
            <p>
              <b>Monthly Memberships</b>
              : The credit card you provide will automatically be charged every month until you cancel. You may cancel at any time.
              <b>Annual Membership</b>
              : The credit card you provide will be charged every year until you cancel.
              <b>Gift Membership</b>
              : Your credit card will be charged once for a gift purchase with no recurring charges. Redemption does not require a credit card. Recipient will be asked to provide an email address for membership confirmation.
            </p>
            <p>
              Your Acorn TV membership takes effect as soon as we receive your order. Membership is nonrefundable. Gift memberships take effect as soon as access codes are redeemed.
            </p>
          </div>
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
