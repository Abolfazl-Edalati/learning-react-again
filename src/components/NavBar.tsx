interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>cart items: {cartItemsCount}</div>;
};

export default NavBar;
