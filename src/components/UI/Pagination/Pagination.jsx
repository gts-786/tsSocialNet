import { getPagesArray } from "../../../utils/pages";
import MyButton from "../MyButton/MyButton";

const Pagination = ({ changePage, totalPages }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div>
      {pagesArray.map((p) => (
        <MyButton
          key={p}
          onClick={() => {
            changePage(p);
          }}
        >
          {p}
        </MyButton>
      ))}
    </div>
  );
};

export default Pagination;
