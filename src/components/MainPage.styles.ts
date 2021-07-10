import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
	height: 100%;
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(180deg, var(--secondary-beige), var(--secondary-blue-grey));
`;

export const CategoryBox = styled.div`
  width: 20rem;
	height: 75%;
	background-color: rgba(255, 255, 255, 0.6);
	backdrop-filter: blur(4px);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 480px) {
		width: 25rem;
	}

	@media (min-width: 720px) {
		width: 40rem;
	}

	@media (min-width: 960px) {
		width: 55rem;
	}

	@media (min-width: 1280px) {
		width: 75rem;
	}
`;

export const CategoryTitle = styled.h2`
	color: var(--primary-dark);
  font-size: 2.5rem;
	font-family: Noto Sans KR;
	letter-spacing: 0.5px;
`;

export const CategoryGrid = styled.ul`
  --grid-item-size: 20rem;

  list-style: none;
	overflow-y: auto;
	margin-block: 0;
	margin-inline: 0;
	padding-inline: 0;
	margin-top: 1.5rem;
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1.5rem;

	@media (min-width: 960px) {
	  grid-template-columns: repeat(2, var(--grid-item-size));
	}

	@media (min-width: 1280px) {
	  grid-template-columns: repeat(3, var(--grid-item-size));
	}
`;

export const CategoryGridItem = styled.li`
  width: var(--grid-item-size);
	height: calc(var(--grid-item-size) / 2);
	background-color: #f2f3f7;
	color: var(--primary-dark);
	box-shadow:
	  -2px -2px 5px rgba(255, 255, 255, 1),
		3px 3px 5px rgba(0, 0, 0, 0.08);
	border-radius: 0.75rem;
	transition: color 250ms, background-color 250ms, box-shadow 250ms;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		font-size: 1.875rem;
		font-weight: 500;
		line-height: 2.25rem;
	}

	&:hover {
		box-shadow:
		  inset -2px -2px 5px rgba(255, 255, 255, 1),
			inset 3px 3px 5px rgba(0, 0, 0, 0.08);
		background-color: var(--secondary-blue-grey);
	}

	&:active {
		box-shadow:
		  inset -2px -2px 5px rgba(255, 255, 255, 1),
			inset 3px 3px 5px rgba(0, 0, 0, 0.08);
		background-color: var(--secondary-blue-grey);
	}
`;

const styles = {
	Main,
	CategoryBox,
	CategoryTitle,
	CategoryGrid,
	CategoryGridItem,
};

export default styles;

// const BackGround = styled.div`
// position: relative;
// width: 1440px;
// height: 947px;
// left: 0%;
// right: 0%;
// top: 0px;
// bottom: 145px;
// background: linear-gradient(180deg, #FFD7CA 6.25%, #D1F1F8 53.12%);
// border: 1px solid #000000;
// box-sizing: border-box;
// mix-blend-mode: normal;
// opacity: 0.44;
// backdrop-filter: blur(4px);

// border-radius: 5px;`;

// const Title = styled.div`
// width: 800px
// Height: 0px
// font-size: 26px
// text-align: center
// line-height: 35px

// width: 127px;
// height: 35px;
// left: 656px;
// top: 43px;

// /* Head */

// font-family: Noto Sans;
// font-style: normal;
// font-weight: 800;
// font-size: 26px;
// line-height: 35px;
// margin-left: 550px;
// color: #000000;
// `;


// const InBackground = styled.div`
// position: absolute;
// left: 9.65%;
// right: 9.65%;
// top: 170px;
// bottom: 145px;
// background: #FFFFFF;
// mix-blend-mode: normal;
// opacity: 0.44;
// backdrop-filter: blur(4px);
// border-radius: 5px`;

// const SubTitle =  styled.div`
// position: absolute;
// width: 825px;
// height: 54px;
// left: 22px;
// top: 100px;

// font-family: Noto Sans;
// font-style: normal;
// font-weight: 600;
// font-size: 40px;
// line-height: 54px;

// /* Primary_dark */

// color: #203241
// opacity: 0.7;
// `;

// const FrontEndButton = styled.button`
  
// position: absolute;
// width: 325px;
// height: 173px;
// left: 217px;
// top: 330px;

// background: rgba(242, 239, 237, 0.99);
// opacity: 0.83;
// /* Shadow_button */

// box-shadow: 1px 8px 20px -3px rgba(32, 50, 65, 0.5), inset 3px 1px 20px 1px rgba(0, 0, 0, 0.25);
// border-radius: 10px;
// font-family: Noto Sans;
// font-style: normal;
// font-weight: 600;
// font-size: 30px;
// line-height: 41px;
// /* identical to box height */


// color: #203241;
// `;

// const BackEndButton = styled.button`
  
// position: absolute;
// width: 325px;
// height: 173px;
// left: 556px;
// top: 330px;

// background: #28628B;
// /* Shadow_hover */

// box-shadow: 2px 4px 9px 4px rgba(0, 0, 0, 0.25), inset 13px 14px 22px -3px rgba(32, 50, 65, 0.5);
// border-radius: 10px;
// font-family: Noto Sans;
// font-style: normal;
// font-weight: 600;
// font-size: 30px;
// line-height: 41px;
// /* identical to box height */


// color: #FFFFFF;
// `;