import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

// const ShopPage = ({ match }) => (
//   <div className='shop-page'>
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );



class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    // //   async (snapshot) => {
    // //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    // //     updateCollections(collectionsMap);
    // //     this.setState({ loading: false });
    // //   }
    // // );
    // // fetch(
    // //   "https://firestore.googleapis.com/v1/projects/clothing-db-9d754/databases/(default)/documents/collections"
    // // )
    // //   .then((response) => response.json())
    // //   .then((collections) => console.log(collections));
    // collectionRef.get().then(snapshot => {
    //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //       updateCollections(collectionsMap);
    //       this.setState({ loading: false });
    //     });
  }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
        component={CollectionsOverviewContainer}
        />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}
// <Route exact path={`${match.path}`} component={CollectionsOverview} />

// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   isCollectionLoaded: selectIsCollectionsLoaded,
// });
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

// const mapDispatchToProps = (dispatch) => ({
//   updateCollections: (collectionsMap) =>
//     dispatch(updateCollections(collectionsMap)),
// });
export default connect(null, mapDispatchToProps)(ShopPage);
