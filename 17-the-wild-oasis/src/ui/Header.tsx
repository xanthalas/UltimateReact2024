import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

type HeaderProps = {
  children: React.ReactNode;
};

function Header(props: HeaderProps) { 
  return (
    <StyledHeader>
      {props.children}
    </StyledHeader>
  );
}

export default Header;
