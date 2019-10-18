import React from 'react';

// import { RecordedBooksTitle, RecordedBooksSignedIn } from './recorded-books/RecordedBooks';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { GiveDetails } from './give-details/GiveDetails';
import { SignUpForm } from './give-details/froms/signup/SignUpForm';
import { SignInForm } from './give-details/froms/signin/SignInForm';

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
        </div>
      </div>
      <Footer />
    </div>

  // 	<article class="giveDetails">
  // 		<\% if (membership.Store == 'RECORDEDBOOKS') { %>
  // 			<aside id="recBooks" class="recBooks">
  // 			<\%  if (membership.Status != 'EXPIRED') { %>

  // 				<h4><atv:il8n var="FREE-SEVEN-DAYS" /></h4>
  // 				<p><atv:il8n var="SIGNUP-FULL-MEMBERSHIP" /></p>

  // 			<\% } else { %>
  // 				<h4><atv:il8n var="FREE-ACCESS-ENDED" /></h4>
  // 				<p><atv:il8n var="SIGNUP-FULL-MEMBERSHIP" /></p>
  // 			<\% }  %>
  // 			</aside>
  // 		<\% } else { %>
  // 			<\%  if (['EXPIRED', 'CANCELED'].includes(membership.Status)) { %>
  // 				<h1><atv:il8n var="RENEW-ACORNTV-MEMBERSHIP" /></h1>
  // 				<p><atv:il8n var="MEMBERSHIP-EXPIRATION" /></p>
  // 			<\% } else { %>
  // 				<h1><atv:il8n var="START-WATCHING-ACORNTV-NOW" /></h1>
  // 				<p><atv:il8n var="ENJOY-BRITISH-SHOWS" /></p>
  // 			<\% }  %>
  // 		<\% }  %>
  // 	</article>

  // 	<aside id="signUpForm" class="sign-in <\%= session.LoggedIn ? ' hidden' : '' %>">
  // 		<h4><atv:il8n var="SIGN-UP" /></h4>

  // 		<div class="row">
  // 			<div class="col-md-5">
  // 				<div class="form-group">
  // 					<label for="firstName" class="control-label"><atv:il8n var="FIRST-NAME" /> <span>(<atv:il8n var="REQUIRED" />)</span></label>
  // 					<input id="firstName" class="form-control" name="firstName" type="text" value="<\%=customer.FirstName %>">
  // 				</div>
  // 			</div>
  // 			<div class="col-md-5">
  // 				<div class="form-group">
  // 					<label for="lastName" class="control-label"><atv:il8n var="LAST-NAME" /> <span>(<atv:il8n var="REQUIRED" />)</span></label>
  // 					<input id="lastName" class="form-control" name="lastName" type="text" value="<\%=customer.LastName %>">
  // 				</div>
  // 			</div>
  // 		</div>

  // 		<div class="row">
  // 			<div class="col-md-10">
  // 				<div class="form-group">
  // 					<label for="email" class="control-label"><atv:il8n var="EMAIL-ADDRESS" /> <span>(<atv:il8n var="REQUIRED" />)</span></label>
  // 					<input id="email" class="form-control" name="email" type="text" value="<\%=customer.Email %>">
  // 				</div>
  // 			</div>
  // 		</div>

  // 		<div class="row">
  // 			<p><atv:il8n var="MEMBERSHIP-RENEWAL" /><a href="#" id="signInLink"><atv:il8n var="SIGN-IN" /></a>.
  // 		</div>
  // 	</aside>

  // 	<aside id="signInForm" class="sign-in hidden">
  // 		<p>
  // 			<a id="backToSignup" href="#">
  // 				<i class="fa fa-arrow-left" aria-hidden="true"></i>
  // 				<atv:il8n var="BCK-TO-SIGNUP" />
  // 			</a>
  // 		</p>
  // 		<form>
  // 			<h4><atv:il8n var="SIGN-IN" /></h4>
  // 			<div class="row">
  // 				<div class="col-md-4">
  // 					<div class="form-group">
  // 						<label for="signInEmail" class="control-label"><atv:il8n var="EMAIL-ADDRESS" />
  // 							<small><atv:il8n var="REQUIRED" /></small>
  // 						</label>
  // 						<input class="form-control" id="signInEmail" name="email" type="email" value="<\%=customer.Email %>" required>
  // 					</div>

  // 					<div class="form-group">
  // 						<label for="password" class="control-label">
  // 							<atv:il8n var="PASSWORD" /> <small><atv:il8n var="REQUIRED" /></small>
  // 						</label>
  // 						<input class="form-control" id="password" name="password" type="password" required>
  // 					</div>
  // 				</div>
  // 			</div>
  // 			<button class="btn btn-success" type="submit" href="#"><atv:il8n var="SIGN-IN" /></button>
  // 			<a href="//<\%= window.location.hostname.replace('store','signup') %>/forgotpassword.jsp" target="_blank"><atv:il8n var="FORGOT-PASSWORD" /></a>
  // 		</form>
  // 	</aside>

  // 	<aside id="signedIn" class="signedIn <\%= session.LoggedIn ? '' : 'hide' %>">
  // 		<\% if(session.LoggedIn && membership.Status == 'ACTIVE' &&  membership.Store != 'RECORDEDBOOKS') { %>
  // 			<h4><atv:il8n var="HELLO" /> <span><\%=customer.Name %></span>, <atv:il8n var="ALREADY-MEMBER" /></h4>

  // 			<\% if(membership.Term == 'MONTH' && !membership.ExpirationDate) { %>
  // 				<atv:il8n var="YOUR-MEMBERSHIP-TYPE" /> <strong><\%= (membership.Term == 'MONTH' ? 'MONTHLY' : 'ANNUAL') %></strong>
  // 			<\% } else if (membership.ExpirationDate) { %>
  // 				<atv:il8n var="MEMBERSHIP-SET-EXPIRE" /> <\%= membership.ExpirationDate %>
  // 			<\% } %>

  // 			<a class="btn btn-primary" href="https://<\%= window.location.href.indexOf('dev') > -1  ? 'dev2.' : (window.location.href.indexOf('qa') > -1  ? 'qa.' : '') %>acorn.tv">Watch Now</a>
  // 			<p>
  // 				<\% if(customer.webPaymentEdit) { %>
  // 					<\% if( ['MONTH', 'TRIAL'].includes(membership.Term) ) { %>
  // 						<a href="#" id="changeToAnnual"><atv:il8n var="CHANGE-TO-ANNUAL" /></a><br/>
  // 					<\% } %>
  // 					<\% if(membership.Term == 'ANNUAL' && membership.ExpirationDate) { %>
  // 						<a href="#" id="renewMembership"><atv:il8n var="RENEW-MEMBERSHIP" /></a><br/>
  // 					<\% } %>
  // 				<\% } else { %>
  // 					<br/><atv:il8n var="MANAGE-BILLING-DETAILS" /> <\%=membership.Device %>. <atv:il8n var="PLEASE-LOG-IN" /> <\%=membership.Device %> to <atv:il8n var="MANAGE-BILLING" /><br/>
  // 				<\% } %>

  // 				<%-- Hide Gifting when in Australia --%>
  // 				<% if ( ! cloudFrontCountryHeader.trim().equalsIgnoreCase("AU") ) { %>
  // 				<a href="#" id="giveGift"><atv:il8n var="GIVE-ACORNTV" /></a>
  // 				<% } %>
  // 			</p>

  // 		<\% } else if(session.LoggedIn) { %>
  // 			<h4><atv:il8n var="HELLO" /> <span><\%=customer.Name %></span></h4>
  // 			<p><atv:il8n var="CHOOSE-MEMBERSHIP" /></p>
  // 		<\% } %>
  // 	</aside>

  // 	<div id="signInAlert" class="alert hidden"></div>

  // 	<\% if ( _.size( plans.currencies() ) > 1 ) { %>
  // 		<section class="currency">
  // 			<label for="currency-select" class="control-label">
  // 				<strong><atv:il8n var="CURRENCY" /></strong>
  // 			</label>
  // 			<select name="" id="currency-select">
  // 			<\% _.each(plans.currencies() , function(symbol, currency) { %>
  // 				<option <\%= (currency == plans.get("defaultCurrency")) ? 'selected' : '' %>  value="<\%= currency %>-<\%= symbol %>"><\%= currency %></option>
  // 			<\% }); %>
  // 			</select>
  // 		</section>
  // 	<\% } %>

  // 	<\% if (session.LoggedIn && membership.Store == 'RECORDEDBOOKS') { %>
  // 		<div>
  // 	<\% } else { %>
  // 		<div class="<\%= session.LoggedIn && membership.Status == 'ACTIVE' ? 'hidden' : '' %>">
  // 	<\% } %>
  // 			<div class="order-item" id="membershipItem">
  // 				<div class="col-md-8">
  // 					<h3 class="item-name"><atv:il8n var="ACORNTV-MEMBERSHIP" /></h3>
  // 					<p><atv:il8n var="UNLIMITED-ACCESS" /></p>
  // 				</div>
  // 				<div class="col-md-4">
  // 					<section class="plan monthly" data-price="<\%= plans.getMonthly().price %>" data-plan-id="<\%= plans.getMonthly().id %>">
  // 						<\% if (session.LoggedIn && membership.Store == 'RECORDEDBOOKS') { %>
  // 							<input id="becomeMonthlyMember" name="membership" type="radio">
  // 						<\% } else { %>
  // 							<input id="becomeMonthlyMember" name="membership" type="radio"<\%= (session.LoggedIn && membership.Status == 'ACTIVE' && membership.Term && membership.Term == 'MONTH') ? 'disabled="disabled"' : '' %>>
  // 						<\% }  %>
  // 						<label for="becomeMonthlyMember" class="text-right">
  // 							<div class="h4">
  // 								<strong><atv:il8n var="MONTHLY" /></strong>
  // 								<span>
  // 									<\%= plans.showMonthly() %>
  // 								</span>
  // 							</div>
  // 							<p>
  // 								<atv:il8n var="AUTOMATIC-MONTHLY-BILLING" />
  // 							</p>
  // 						</label>
  // 					</section>

  // 					<section class="plan yearly" data-price="<\%= plans.getYearly().price %>" data-plan-id="<\%= plans.getYearly().id %>">
  // 						<input id="becomeAnnualRenewingMember" name="membership" type="radio"<\%= giveObj.get("Membership").quantity > 0 && giveObj.get("Membership").autoRenew ? ' checked' : '' %>>
  // 						<label for="becomeAnnualRenewingMember" class="text-right">
  // 							<div class="h4">
  // 								<strong><atv:il8n var="ANNUAL" /></strong>
  // 								<span>
  // 									<\%= plans.showYearly() %>
  // 								</span>
  // 							</div>
  // 							<p>
  // 								<atv:il8n var="ANNUAL-PRICE-DEAL" />
  // 							</p>
  // 						</label>
  // 					</section>
  // 				</div>
  // 			</div>

  // 			<div class="order-item gift-item slim <%= (cloudFrontCountryHeader.trim().equalsIgnoreCase("AU")) ? "hidden" : "" %>" data-price="<\%= plans.getGift().price %>">
  // 				<div class="col-md-8 left">
  // 					<h3 class="item-name"><atv:il8n var="GIFT-MEMBERSHIP" /></h3>
  // 					<p><atv:il8n var="YEAR-UNLIMITED-ACCESS" /></p>
  // 				</div>
  // 				<div class="col-md-2">
  // 					<div class="form-group">
  // 						<label class="control-label">
  // 							<strong><atv:il8n var="GIFT-PRICE" /></strong>
  // 							<span>
  // 								<\%= plans.showGift() %>
  // 							</span>
  // 						</label>
  // 					</div>
  // 					<div class="form-group">
  // 						<label for="qty" class="control-label">
  // 							<strong><atv:il8n var="QTY" /></strong>
  // 						</label>
  // 						<select class="form-control inline-form-control" id="qty" name="qty">
  // 							<option value="0"><atv:il8n var="SELECT-QTY" /></option>
  // 							<\% _.each(_.range(1,4), function(i) { %>
  // 								<option value="<\%= i %>"<\%= i == giveObj.get("Give").quantity ? ' selected' : '' %>><\%= i %></option>
  // 							<\% }) %>
  // 						</select>
  // 					</div>
  // 				</div>
  // 				<div class="col-md-2" id="quantityTotal">
  // 					<\% if(giveObj.get('Give').quantity == 0) { %>
  // 						<strong><atv:il8n var="NO-GIFT-SELECTED" /></strong>
  // 					<\% } else { %>
  // 						<strong>
  // 							<atv:il8n var="TOTAL" /> <\%= giveObj.get("Total")  %>
  // 						</strong>
  // 					<\% } %>
  // 				</div>
  // 			</div>

  // 			<div class="order-item checkout">
  // 				<a class="btn btn-primary pull-right" href="#"><atv:il8n var="CHECKOUT" /></a>
  // 			</div>
  // 		</div><!-- END ORDER-ITEMS -->

  // 	<div id="signInModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="signInModal">
  // 		<div class="modal-dialog" role="document">
  // 			<div class="modal-content">
  // 				<div class="modal-header">
  // 					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
  // 					<h3 id="confirm-cancel-label"><atv:il8n var="SIGN-IN-INFORMATION" /></h3>
  // 				</div>
  // 				<div class="modal-body">
  // 					<h4 id="SignInStatus"></h4>
  // 				</div>
  // 				<div class="modal-footer">
  // 					<button class="btn btn-primary btn-confirmation" data-dismiss="modal"><atv:il8n var="OKAY" /></button>
  // 				</div>
  // 			</div>
  // 		</div>
  // 	</div>

  // <\% if (session.LoggedIn && membership.Store == 'RECORDEDBOOKS') { %>
  // 	<div class="legal">
  // <\% } else { %>
  // 	<div class="legal <\%= session.LoggedIn && membership.Status == 'ACTIVE' && membership.Term == 'ANNUAL' || (session.LoggedIn && !customer.webPaymentEdit) ? 'hide' : '' %>">
  // <\% } %>
  // 		<p><atv:il8n var="MONTHLY-MEMBERSHIPS" var1=" <%= plans.showMonthly() %>" var2=" <%= plans.showYearly() %>" /></p>
  // 		<p><atv:il8n var="MEMBERSHIP-TERMS" /></p>
  // 	</div>
  // </script>

  // <script type="text/template" id="reviewTemplate">
  // 	<header>
  // 		<h1><atv:il8n var="ACORNTV-CHECKOUT" /></h1>
  // 		<h2><atv:il8n var="REVIEW-ORDER" /></h2>
  // 		<p><atv:il8n var="ALMOST-DONE" /></p>
  // 	</header>
  // 	<div class="billing-info">
  // 		<h3 class="head"><atv:il8n var="BILLING-ORDER-INFORMATION" />
  // 			<div class="update-billing">
  // 				<a href="#" id="editBilling"><atv:il8n var="CHANGE-PAYMENT" /></a>
  // 			</div>
  // 		</h3>
  // 		<p class="billing-name">
  // 			<atv:il8n var="NAME" /> <strong><\%= customer.Name %></strong>
  // 		</p>
  // 	</div>

  // 	<div class="order-item">
  // 		<h3 class="head order-summary"><atv:il8n var="ORDER-SUMMARY" /></h3>

  // 		<\% if(giveObj.get("Membership").quantity > 0) { %>
  // 			<div class="row">
  // 				<span class="col-md-3">
  // 					<img src="img/membership-user.png" alt="gift-box" width="85" height="">
  // 				</span>
  // 				<span class="col-md-7">
  // 					<h4 class="item-name"><atv:il8n var="ANNUAL-MEMBERSHIP" /></h4>
  // 					<\% if(giveObj.get("Give").quantity > 0) { %>
  // 						<p><atv:il8n var="UNLIMITED-ACCESS" /></p>
  // 					<\% } %>

  // 				</span>
  // 				<span class="col-md-2 text-right">
  // 					<p class="price text-right">
  // 						<\%= plans.get("defaultCurrency") + plans.get("defaultCurrencySymbl") + giveObj.get("Membership").price %>
  // 					</p>
  // 					<p class="text-right">
  // 						Qty: <\%= giveObj.get("Membership").quantity %>
  // 					</p>
  // 					<\% if(giveObj.get("Type") == 'Gift') { %>
  // 					<div class="control-group row text-right" style="margin-bottom:0;">
  // 						<div class="controls">
  // 							<p class="remove">x <a href="#"><atv:il8n var="REMOVE-THIS-ITEM" /></a></p>
  // 						</div>
  // 					</div>
  // 					<\% } %>
  // 				</span>
  // 			</div>
  // 		<\% } %>
  // 		<\% if(giveObj.get("MonthlyMembership").quantity > 0) { %>
  // 			<div class="row">
  // 				<span class="col-md-3">
  // 					<img src="img/membership-user.png" alt="gift-box" width="85" height="">
  // 				</span>
  // 				<span class="col-md-7">
  // 					<h4 class="item-name"><atv:il8n var="ACORNTV-MONTHLY-MEMBERSHIP" /></h4>
  // 					<\% if(giveObj.get("Give").quantity > 0) { %>
  // 						<p><atv:il8n var="UNLIMITED-ACCESS" /></p>
  // 					<\% } %>
  // 				</span>
  // 				<span class="col-md-2">
  // 					<p class="price text-right">
  // 						<\%= plans.get("defaultCurrency") + plans.get("defaultCurrencySymbl") + giveObj.get("MonthlyMembership").price  %>
  // 					</p>
  // 					<p class="text-right">
  // 						<atv:il8n var="QTY" /> <\%= giveObj.get("MonthlyMembership").quantity %>
  // 					</p>
  // 					<\% if(giveObj.get("Type") == 'Gift') { %>
  // 					<div class="control-group row text-right" style="margin-bottom:0;">
  // 						<div class="controls">
  // 							<p class="remove">x <a href="#"><atv:il8n var="REMOVE-THIS-ITEM" /></a></p>
  // 						</div>
  // 					</div>
  // 					<\% } %>
  // 				</span>
  // 			</div>
  // 		<\% } %>

  // 		<\% if(giveObj.get("Give").quantity > 0) { %>
  // 		<div class="row">
  // 			<span class="col-md-3">
  // 				<img src="img/gift-box.png" alt="gift-box" width="85" height="">
  // 			</span>
  // 			<span class="col-md-7">
  // 			<h4 class="item-name"><atv:il8n var="GIFT-MEMBERSHIP" /></h4>
  // 				<p class="details"><atv:il8n var="YEAR-UNLIMITED-ACCESS" /></p>
  // 				<hr>
  // 			</span>
  // 			<span class="col-md-2">
  // 				<p class="price text-right">
  // 					<\%= plans.get("defaultCurrency") + plans.get("defaultCurrencySymbl") + giveObj.get("Give").price %>
  // 				</p>
  // 				<p class="qty text-right">
  // 					<atv:il8n var="QTY" /> <\%= giveObj.get("Give").quantity %>
  // 				</p>
  // 			</span>
  // 		</div>
  // 		<\% } %>
  // 	</div>

  // 	<div class="order-total">
  // 		<div class="row">
  // 			<div class="col-md-6">
  // 				<\% if(giveObj.get("Membership").quantity && !giveObj.get("Give").quantity) { %>
  // 				<div class="form-inline">
  // 					<div class="form-group">
  // 						<label for="promo-code" class="control-label">
  // 							<atv:il8n var="GOT-PROMO-CODE" />
  // 						</label>
  // 						<input type="text" id="promo-code" class="form-control">
  // 					</div>
  // 				</div>
  // 				<\% } %>
  // 			</div>
  // 			<div class="col-md-6 text-right">
  // 				<atv:il8n var="ORDER-TOTAL" />
  // 				<\%= plans.get("defaultCurrency") + plans.get("defaultCurrencySymbl") + giveObj.get("Total") %>
  // 				<br>
  // 				<span class="tax-placeholder"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></span>
  // 			</div>
  // 		</div>

  // 	</div>
  // 	<div class="submit-cancel purchase-footer">
  // 		<a href="#" id="cancelOrder" class="cancel-order">
  // 			<atv:il8n var="CANCEL-ORDER" />
  // 		</a>
  // 		<a class="btn btn-primary btn-lg submit-order" href="#">
  // 			<atv:il8n var="PLACE-ORDER" />
  // 		</a>
  // 	</div>

  // 	<p class="legal">
  // 		<atv:il8n var="MEMBERSHIP-EFFECT" />
  // 		<atv:il8n var="CURRENTLY-AVAILABLE" />
  // 	</p>

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
