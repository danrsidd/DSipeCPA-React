import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
			<Routes>
				{/* About Page Start */}
				<Route path="/about-the-company" element={<About />} />
				{/* Contact Page Start */}
				<Route path="/contact" element={<Contact />} />
				{/* Sitemap Page Start */}
				<Route path="/sitemap" element={<Sitemap />} />
				{/* Privacy Page Start */}
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				{/* Accounting Services Start */}
				<Route path="/bookkeeping" element={<Bookkeeping />} />
				<Route path="/payroll-services" element={<Payroll />} />
				<Route path="/new-business-set-up" element={<NewBusiness />} />
				<Route path="/non-profit-set-up" element={<NonProfit />} />
				<Route path="/quick-books-services" element={<QuickBooks />} />
				<Route path="/accounting-services" element={<AccountingServices />} />
				{/* Tax Services Start */}
				<Route path="/tax-planning" element={<TaxPlanning />} />
				<Route path="/tax-preparation-2" element={<TaxPreparation />} />
				<Route path="/tax-services" element={<TaxServices />} />
				{/* Home Page Start */}
				<Route exact path="/" element={<Home />} />
				{/* 404 Page Start */}
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
