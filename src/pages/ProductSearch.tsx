import { AlgoliaItem } from '../utils/AlgoliaItem';
import { ProductComponent } from '../components/_product';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch('VG5LKCBKWQ', '81312ba904fecad683207b552c988cb9');

function Hit(hit: AlgoliaItem | any) {
  console.log('hit')
  return (

    <div>{JSON.stringify(hit)}</div>
    // <ProductComponent></ProductComponent>
  );
}
function Search(){
  console.log('search fire')
  return (
  <InstantSearch searchClient={searchClient} indexName="sandbox-index">
    <Hits hitComponent={Hit}></Hits>
  </InstantSearch>
  )


  
}

export function ProductSearch() {
  return (
    <InstantSearch searchClient={searchClient} indexName="sandbox-index">
      <SearchBox searchAsYouType={false} onSubmit={Search}/>
    </InstantSearch>

  );
}
