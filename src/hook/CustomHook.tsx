import React, { useState } from 'react'

// Custom Hook :
// - 리액트의 훅 함수는 반드시 함수형 컴포넌트의 코드 블럭에서만 호출 가능
// - 

export default function CustomHook() {
  

//                    state                    //
  const [page, setPage] = useState<number>(1);
  const [section, setSection] = useState<number>(1);
  const [boardList, setBoardList] = useState<string[]>([]);
  const [viewList, setViewList] = useState<string[]>([]);
  const [viewPageList, setViewPageList] = useState<number[]>([]);

  const COUNT_PER_PAGE = 5;
  const COUNT_PER_SECTION = 10;

  let totalPageCount = 0;
  let totalSectionCount = 0;

  const setNextPage = () => {
  
  };
  
  const setPreviousPage = () => {

  };
  
  const setNextSection = () => {

  };

  const setPreviousSection = () => {

  };

  useEffect(() => {
    const boardList = BOARD_LIST;
    setBoardList(boardList);
    totalPageCount = Math.floor((boardList.length -1) / COUNT_PER_PAGE) + 1;
    totalSectionCount = Math.floor((boardList.length -1) / COUNT_PER_SECTION) + 1;

    const viewList = [];
    const currentPageStart = COUNT_PER_PAGE * (page - 1);
    const currentPageEnd = COUNT_PER_PAGE * page - 1;

    for (let index = currentPageStart; index <= currentPageEnd; index++) {
      if (index >= boardList.length) break;
      viewList.push(boardList[index]);
    }
    setViewList(viewList);


    const viewPageList = [];
    const currentSectionStart = COUNT_PER_SECTION * section - (COUNT_PER_SECTION - 1);
    const currentSectionEnd = COUNT_PER_SECTION * section;

    for (let page = currentSectionStart; page <= currentSectionEnd; page++) {
      if (page > totalPageCount) break;
      viewPageList.push(page);
    }
    setViewPageList(viewPageList);

  }, []); // 빈배열시 마운트시에만 동작

//                     render                     //
  return (
    <div>
      {viewList.map((item, index) => <h3 key={index}>{item}</h3>)}
      <div>
        <span style={{ display: 'inline-block', margin: '4px'}}>이전</span>
        {viewPageList.map((item, index) => <span key={index} style={{ display: 'inline-block', margin: '4px', fontWeight: item === page ? 900 : 400 }}>{item}</span>)}
        <span style={{ display: 'inline-block', margin: '4px'}}>이후</span>
      </div>
    </div>
  )
}

const BOARD_LIST = [
  '게시물1',
  '게시물2',
  '게시물3',
  '게시물4',
  '게시물5',
  '게시물6',
  '게시물7',
  '게시물8',
  '게시물9',
  '게시물10',
  '게시물11',
  '게시물12',
  '게시물13',
  '게시물14',
  '게시물15',
  '게시물16',
  '게시물17',
  '게시물18',
  '게시물19',
  '게시물20',
  '게시물21',
  '게시물22',
  '게시물23',
  '게시물24',
  '게시물25',
  '게시물26',
  '게시물27',
  '게시물28',
  '게시물29',
  '게시물30',
  '게시물31',
  '게시물32',
  '게시물33',
  '게시물34',
  '게시물35',
  '게시물36',
  '게시물37',
  '게시물38',
  '게시물39',
  '게시물40',
  '게시물41',
  '게시물42',
  '게시물43',
  '게시물44',
  '게시물45',
  '게시물46',
  '게시물47'
];
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

