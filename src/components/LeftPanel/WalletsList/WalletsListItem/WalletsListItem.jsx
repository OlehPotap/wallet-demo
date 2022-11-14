import s from "./walletsListItem.module.scss";
import { HandySvg } from "handy-svg";
import walletIcon from "../../../../assets/images/wallet-icon.svg";

const WalletsListItem = ({
  isSelected,
  handleSelectWallet,
  id,
  name,
  adress,
  amount,
}) => {
  const formatedAmount = amount.toFixed(4);
  let formatedAdress = "";

  if (adress.includes("NATURE")) {
    formatedAdress = adress.split("");
    formatedAdress.splice(0, 6);
    formatedAdress = formatedAdress.join("");
  }

  if (adress.length >= 17) {
    formatedAdress = formatedAdress.split("");
    formatedAdress.splice(8, formatedAdress[formatedAdress.length - 1], "...");
    formatedAdress = formatedAdress.join("");
  }

  return (
    <li
      onClick={() => {
        handleSelectWallet(id);
      }}
      className={isSelected ? s.listItemSelected : s.listItem}
    >
      <HandySvg
        className={s.listItemSvg}
        src={walletIcon}
        width="50"
        height="50"
      />
      <div className={s.listitemInfoWrapper}>
        <div className={s.walletInfoWrapper}>
          <p className={isSelected ? s.listItemTextSelected : s.listItemText}>
            {name}
          </p>
          <p className={isSelected ? s.listItemTextSelected : s.listItemText}>
            {formatedAmount} NATURE
          </p>
        </div>
        <p className={isSelected ? s.listItemTextSelected : s.listItemText}>
          {formatedAdress}
        </p>
      </div>
    </li>
  );
};

export default WalletsListItem;
