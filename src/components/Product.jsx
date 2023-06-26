import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.article`
  flex: 1;
  margin: 5px;
  min-width: 16rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg};
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.transparent};
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Image = styled.img`
  height: 20rem;
  width: 16rem;
  z-index: 2;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
  color: white;
`;

const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.hover};
`;

const Product = ({ product }) => {
  return (
    <Container>
      <LinkDecoration to={`/product/${product._id}`}>
        <Image src={product.imgUrl} alt={product.name} />
        <Info>
          <Price> ${product.price}</Price>
        </Info>
      </LinkDecoration>
    </Container>
  );
};

export default Product;
