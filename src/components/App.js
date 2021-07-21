import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./ind_components/Nav";
import Footer from "./ind_components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import AccountingServices from "./pages/AccountingServices";
import Bookkeeping from "./pages/Bookkeeping";
import Payroll from "./pages/Payroll";
import NewBusiness from "./pages/NewBusiness";
import NonProfit from "./pages/NonProfit";
import QuickBooks from "./pages/QuickBooks";
import TaxServices from "./pages/TaxServices";
import TaxPlanning from "./pages/TaxPlanning";
import TaxPreparation from "./pages/TaxPreparation";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./ind_components/ScrollToTop";

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Nav />
			<ScrollToTop />
			<Switch>
				{/* About Page Start */}
				<Route path="/about-the-company">
					<About />
				</Route>
				{/* About Page End */}
				{/* Contact Page Start */}
				<Route path="/contact">
					<Contact />
				</Route>
				{/* Contact Page End */}
				{/* Sitemap Page Start */}
				<Route path="/sitemap">
					<Sitemap />
				</Route>
				{/* Sitemap Page End */}
				{/* Privacy Page Start */}
				<Route path="/privacy-policy">
					<PrivacyPolicy />
				</Route>
				{/* Privacy Page End */}
				{/* Accounting Services Start */}
				<Route path="/bookkeeping">
					<Bookkeeping />
				</Route>
				<Route path="/payroll-services">
					<Payroll />
				</Route>
				<Route path="/new-business-set-up">
					<NewBusiness />
				</Route>
				<Route path="/non-profit-set-up">
					<NonProfit />
				</Route>
				<Route path="/quick-books-services">
					<QuickBooks />
				</Route>
				<Route path="/accounting-services">
					<AccountingServices />
				</Route>
				{/* Accounting Services End */}
				{/* Tax Services Start */}
				<Route path="/tax-planning">
					<TaxPlanning />
				</Route>
				<Route path="/tax-preparation-2">
					<TaxPreparation />
				</Route>
				<Route path="/tax-services">
					<TaxServices />
				</Route>
				{/* Tax Services End */}
				{/* Home Page Start */}
				<Route exact path="/">
					<Home />
				</Route>
				{/* Home Page End */}
				{/* 404 Page Start */}
				<Route path="*">
					<Error />
				</Route>
				{/* 404 Page End */}
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
