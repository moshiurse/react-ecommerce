import React from 'react';
import {connect} from 'react-redux';

import {  updateCollections } from '../../redux/shop/shop.action';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import {firestore, converCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

  state = {
    loading: true
  };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
      const {updateCollections} = this.props;
      const collectionRef = firestore.collection('collections');

      collectionRef.onSnapshot(async snapshot => {
      const collectionMap = converCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({loading: false});
      })
    }

  render(){
    const { match } = this.props;
    const { loading } = this.state
    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={ props => 
              (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} />
            <Route path={`${match.path}/:collectionId`} render={ props => 
              (<CollectionPageWithSpinner isLoading={loading} {...props} />)}/>
          </div>
        );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
            

    export default connect(null,mapDispatchToProps)(ShopPage);