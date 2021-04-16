import React from "react";
import Pagination from "react-js-pagination";

const Paginate = (props) => {
  return (
    <div className="content">
      <div className="row">
        <div className="grid-12">
          <div className="actions-paginate">
            <div>
              <label htmlFor="">
                Items por página
                <select onChange={props.handleSelectItemsPerPage}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20" defaultValue>
                    20
                  </option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </label>
            </div>
            <div>
              <Pagination
                activePage={props.activePage}
                itemsCountPerPage={10}
                totalItemsCount={props.paginate.count}
                pageRangeDisplayed={5}
                onChange={props.handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paginate;
