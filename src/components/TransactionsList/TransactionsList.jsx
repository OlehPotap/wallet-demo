import s from "./transactionsList.module.scss";
import Transaction from "./Transaction/Transaction";

const TransactionsList = ({ transactions, leftPanelIsOpen }) => {
  // const transactions = [
  //   {
  //     transactionAmount: 62.58934983498,
  //     transactionDirection: "NATURE388f0353a936c76349599f0e4",
  //     _id: "634c569c6ea874a2457b44b8",
  //   },
  //   {
  //     transactionAmount: -10.1284275,
  //     transactionDirection: "NATURE388f0353a936c76349599f0e4",
  //     _id: "634c569c6ea874a2457b44b9",
  //   },
  //   {
  //     transactionAmount: 100.48347273487,
  //     transactionDirection: "NATURE388f0353a936c76349599f0e4",
  //     _id: "634c569c6ea874a2457b44ba",
  //   },
  //   {
  //     transactionAmount: -573.594645,
  //     transactionDirection: "NATURE388f0353a936c76349599f0e4",
  //     _id: "634c569c6ea874a2457b44bb",
  //   },
  //   {
  //     transactionAmount: -10.583959395,
  //     transactionDirection: "NATURE388f0353a936c76349599f0e4",
  //     _id: "634c569c6ea874a2457b44bc",
  //   },
  //   {
  //     transactionAmount: 10.583959395,
  //     transactionDirection: "NATURE388f0353a936c76349599f0e4",
  //     _id: "634c569c6ea874a2457b44bd",
  //   },
  // ];
  return (
    <ul
      className={leftPanelIsOpen ? s.transactionsListSided : s.transactionsList}
    >
      {transactions
        ? transactions.map((el) => {
            return (
              <Transaction
                key={el._id}
                amount={el.transactionAmount}
                direction={el.transactionDirection}
              />
            );
          })
        : ""}
    </ul>
  );
};

export default TransactionsList;
