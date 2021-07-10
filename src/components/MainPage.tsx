import {
  Main,
  CategoryBox,
  CategoryTitle,
  CategoryGrid,
  CategoryGridItem,
} from './MainPage.styles';

const dummy = [
  { kr: '프론트엔드', en: 'FrontEnd' },
  { kr: '백엔드', en: 'BackEnd' },
  { kr: '프론트엔드', en: 'FrontEnd' },
  { kr: '백엔드', en: 'BackEnd' },
  { kr: '프론트엔드', en: 'FrontEnd' },
  { kr: '백엔드', en: 'BackEnd' },
];

function MainPage() {
  return (
    <Main>
      <CategoryBox>
        <CategoryTitle>관심있는 분야를 선택해주세요!</CategoryTitle>
        <CategoryGrid>
          {dummy.map((el, index) => (
            <CategoryGridItem key={index}>
              <span>{el.kr}</span>
              <span>{el.en}</span>
            </CategoryGridItem>
          ))}
        </CategoryGrid>
      </CategoryBox>
    </Main>
  );
}

export default MainPage;
