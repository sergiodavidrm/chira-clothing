import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collectionPage.component';

import { Route } from "react-router-dom";
// import { selectCollections } from "../../redux/shop/shop.selectors";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }
const ShopPage = ({match}) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`}  component={CollectionPage} />
  </div>
);

export default ShopPage;
