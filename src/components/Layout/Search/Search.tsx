const Search = () => {
  return (
    <div className='row bm-row'>
      <div className='col-12'>
        <form className='form-inline bm-mb-80 bm-search-form'>
          <input
            className='form-control bm-search-input'
            name='query'
            type='text'
            placeholder='Search...'
            aria-label='Search'
          />
          <button className='bm-search-button' type='submit'>
            <i className='fas fa-search bm-search-icon' aria-hidden='true'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
