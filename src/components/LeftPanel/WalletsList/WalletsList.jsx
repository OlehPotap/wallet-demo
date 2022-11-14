import s from "./walletsList.module.scss";
import WalletsListItem from "./WalletsListItem/WalletsListItem.jsx";

const WalletsList = ({ handleSelectWallet, wallets }) => {
  return (
    <ul className={s.walletsList}>
      {wallets.map((el) => {
        return (
          <WalletsListItem
            handleSelectWallet={handleSelectWallet}
            isSelected={el.isSelected}
            key={el._id}
            id={el._id}
            name={el.name}
            adress={el.adress}
            amount={el.amount}
          />
        );
      })}
    </ul>
  );
};

export default WalletsList;
