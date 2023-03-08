import { MyPaginate } from './Pagination.styles';

const Pagination=({itemsPerPage,handleOnClick,initialPage})=> {
	return (
		     <MyPaginate
			breakLabel="..."
			nextLabel="next >"
			onPageChange={handleOnClick}
			pageRangeDisplayed={5}
			pageCount={itemsPerPage}
			previousLabel="< previous"
			renderOnZeroPageCount={null}
			initialPage={+initialPage-1}
		/>
	);
};

export default Pagination;