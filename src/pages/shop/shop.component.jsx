import React from 'react';
import {connect} from 'react-redux';

import {  updateCollections } from '../../redux/shop/shop.action';

import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import {firestore, converCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;

    componentDidMount(){
      const {updateCollections} = this.props;
      const collectionRef = firestore.collection('collections');

      collectionRef.onSnapshot(async snapshot => {
      const collectionMap = converCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      })
    }

  render(){
    const { match } = this.props;

    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
          </div>
        );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
            

    export default connect(null,mapDispatchToProps)(ShopPage);