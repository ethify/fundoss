import React, { useContext } from "react";
import "./Modal.scss";
import { X } from "react-feather";
import { ActionContext, StateContext } from "../../hooks";
import Login from "../Login";
import PaymentGateway from "../PaymentGateway";
import Share from "../Share";
import DonationThank from "../DonationThank";
import QFExplainer from "../QFExplainer";
import LegalInfo from "../LegalInfo";
import ConfirmMail from "../ConfirmMail";

function Modal() {
  const { setModalConfig } = useContext(ActionContext);
  const { openModal, modalConfig } = useContext(StateContext);
  return (
    <div className="login-modal">
      <div
        className={`modal-overlay ${!openModal ? "closed" : ""}`}
        id="modal-overlay"
        onClick={(e) => setModalConfig(false, {})}
      ></div>

      <div
        className={`modal ${!openModal ? "closed" : ""}`}
        style={{
          minWidth:
            modalConfig.type === "qfExplainer" || modalConfig.type === "legalInfo"
              ? "80%"
              : 400,
        }}
        id="modal"
      >
        <button
          className="close-button"
          id="close-button"
          onClick={(e) => setModalConfig(false, {})}
        >
          <X />
        </button>
        <div className="modal-guts">
          {modalConfig.type === "login" && <Login></Login>}
          {modalConfig.type === "payment" && <PaymentGateway></PaymentGateway>}
          {modalConfig.type === "share" && <Share></Share>}
          {modalConfig.type === "legalInfo" && <LegalInfo></LegalInfo>}
          {modalConfig.type === "thankYouDonation" && (
            <DonationThank></DonationThank>
          )}
          {modalConfig.type === "qfExplainer" && <QFExplainer></QFExplainer>}
          {modalConfig.type === "confirmMail" && <ConfirmMail></ConfirmMail>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
