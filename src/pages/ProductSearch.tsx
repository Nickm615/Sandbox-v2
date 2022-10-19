import { AlgoliaItem } from '../utils/AlgoliaItem';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch('VG5LKCBKWQ', '81312ba904fecad683207b552c988cb9');

function Hit(hit: AlgoliaItem) {
  return (
    <article>
      <h1>{hit.name}</h1>
    </article>
  );
}

export function ProductSearch() {
  return (
    <InstantSearch searchClient={searchClient} indexName="sandbox-index">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}
