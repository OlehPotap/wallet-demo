import Header from "./Header/Header";
import Container from "../components/Container/Container";
import RightPanel from "./RightPanel/RightPanel";
import TransactionsList from "./TransactionsList/TransactionsList";
import LeftPanel from "./LeftPanel/LeftPanel";
import RegisterPage from "./RegisterPage";
import SignInPage from "./SignInPage/SignInPage";
import AddWalletModal from "./AddWalletModal";
import NewWalletModal from "./NewWalletModal";
import SendModal from "./SendModal";
import ReciveModal from "./ReciveModal";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports.js";
import { getWallets } from "../redux/wallets/wallets-operations";
import { useSelector } from "react-redux";
import {
  getAllWallets,
  // getIsLoading
} from "../redux/wallets/wallets-selectors";
import LeftPanelModal from "./LeftPanelModal/LeftPanelModal";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // window.addEventListener("resize", () => {
  //   console.log(window.innerWidth);
  // });
  // const isLoading = useSelector(getIsLoading);
  // console.log(isLoading);
  const wallets = useSelector(getAllWallets);
  const dispatch = useDispatch();
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [leftPanelIsOpen, setLeftPanelIsOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState([]);
  const [walletData, setWalletData] = useState({});
  const [openModal, setOpenAddWalletModal] = useState({
    AddWalletIsOpen: false,
    NewWalletIsOpen: false,
    SendModalIsOpen: false,
    ReciveModalIsopen: false,
    LeftPanelModalIsOpen: false,
  });
  const handleOpenAddWalletModal = () =>
    setOpenAddWalletModal({
      AddWalletIsOpen: true,
      NewWalletIsOpen: false,
      SendModalIsOpen: false,
      ReciveModalIsopen: false,
      LeftPanelModalIsOpen: false,
    });
  const handleOpenNewWalletModal = () =>
    setOpenAddWalletModal({
      AddWalletIsOpen: false,
      NewWalletIsOpen: true,
      SendModalIsOpen: false,
      ReciveModalIsopen: false,
      LeftPanelModalIsOpen: false,
    });
  const handleOpenSendModal = () =>
    setOpenAddWalletModal({
      AddWalletIsOpen: false,
      NewWalletIsOpen: false,
      SendModalIsOpen: true,
      ReciveModalIsopen: false,
      LeftPanelModalIsOpen: false,
    });
  const handleOpenReciveModal = () =>
    setOpenAddWalletModal({
      AddWalletIsOpen: false,
      NewWalletIsOpen: false,
      SendModalIsOpen: false,
      ReciveModalIsopen: true,
      LeftPanelModalIsOpen: false,
    });
  const handleOpenLeftPanelModal = () =>
    setOpenAddWalletModal({
      AddWalletIsOpen: false,
      NewWalletIsOpen: false,
      SendModalIsOpen: false,
      ReciveModalIsopen: false,
      LeftPanelModalIsOpen: true,
    });
  const handleClosetModal = () =>
    setOpenAddWalletModal({
      AddWalletIsOpen: false,
      NewWalletIsOpen: false,
      SendModalIsOpen: false,
      ReciveModalIsopen: false,
      LeftPanelModalIsOpen: false,
    });

  const pageWidth = window.innerWidth;

  useEffect(() => {
    console.log(pageWidth);
    dispatch(getWallets());
  }, [dispatch, pageWidth]);

  const handleOpenLeftPanel = () => {
    setLeftPanelIsOpen(!leftPanelIsOpen);
  };

  const handleSelectWallet = (id) => {
    setSelectedWallet(
      wallets.map((el) => {
        if (el._id === id) {
          setWalletData(el);
          return { isSelected: true, ...el };
        } else {
          return { isSelected: false, ...el };
        }
      })
    );
    setOpenAddWalletModal({
      AddWalletIsOpen: false,
      NewWalletIsOpen: false,
      SendModalIsOpen: false,
      ReciveModalIsopen: false,
      LeftPanelModalIsOpen: false,
    });
  };
  return (
    <>
      <Header
        isLogedIn={isLogedIn}
        pageWidth={pageWidth}
        handleOpenLeftPanelModal={handleOpenLeftPanelModal}
        handleOpenLeftPanel={handleOpenLeftPanel}
        handleOpenAddWalletModal={handleOpenAddWalletModal}
      />

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route
          path="/home"
          element={
            <>
              <Container>
                {" "}
                <RightPanel
                  handleOpenReciveModal={handleOpenReciveModal}
                  handleOpenSendModal={handleOpenSendModal}
                  walletName={walletData.name}
                  balance={walletData.amount}
                  leftPanelIsOpen={leftPanelIsOpen}
                />
                <TransactionsList
                  transactions={walletData.transactions}
                  leftPanelIsOpen={leftPanelIsOpen}
                />
              </Container>
              {pageWidth < 1280 ? (
                <LeftPanelModal
                  wallets={selectedWallet.length > 0 ? selectedWallet : wallets}
                  handleSelectWallet={handleSelectWallet}
                  open={openModal.LeftPanelModalIsOpen}
                  handleClose={handleClosetModal}
                />
              ) : (
                <LeftPanel
                  wallets={selectedWallet.length > 0 ? selectedWallet : wallets}
                  handleSelectWallet={handleSelectWallet}
                  leftPanelIsOpen={leftPanelIsOpen}
                  handleOpenLeftPanel={handleOpenLeftPanel}
                />
              )}
            </>
          }
        />
      </Routes>

      <AddWalletModal
        handleOpenNewWalletModal={handleOpenNewWalletModal}
        open={openModal.AddWalletIsOpen}
        handleClose={handleClosetModal}
      />
      <NewWalletModal
        open={openModal.NewWalletIsOpen}
        handleClose={handleClosetModal}
      />
      <SendModal
        open={openModal.SendModalIsOpen}
        handleClose={handleClosetModal}
      />
      <ReciveModal
        open={openModal.ReciveModalIsopen}
        handleClose={handleClosetModal}
      />
    </>
  );
}

export default App;
