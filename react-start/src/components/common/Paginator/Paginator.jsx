import React, {useState} from "react";
import styles from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged , portionSize = 20}) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);

   let pages = [];
   for (let i=1; i <= pagesCount; i++) {
         pages.push(i);
   };

   let portionCount = Math.ceil(pagesCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1)
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;

   return (
      <div className={styles.pageBlock}>
         {portionNumber > 1 &&
         <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            <div className={styles.pageNumber}>
               {pages
                   .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                   .map((p) => {
                      return  <span className={currentPage === p && styles.selectedPage} onClick={ () => {onPageChanged(p)}}>{p}</span>
                   })}
            </div>
         {portionCount > portionNumber &&
         <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
      </div>)
}

export default Paginator;