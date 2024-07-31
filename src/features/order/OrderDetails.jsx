import Modal from "../../ui/Modal";
import { formatCurrency } from "../../utils/helpers";
import ConfirmOrder from "./ConfirmOrder";

function OrderDetails({ totalPrice }) {
  return (
    <div>
      <p className="flex items-center justify-between py-6">
        <span>Order Total</span>
        <span className="text-3xl font-bold">{formatCurrency(totalPrice)}</span>
      </p>
      <div className="flex items-center gap-2 rounded-lg bg-rose-100 p-3">
        <img src="assets/images/icon-carbon-neutral.svg" alt="icon" />
        <p>
          This is a <span className="font-medium">carbon-neutral</span> delivery
        </p>
      </div>

      <div className="flex justify-center">
        <Modal>
          <Modal.Open opens="confirm">
            <button className="mt-6 rounded-full bg-custom-red px-16 py-3 font-semibold text-rose-50 hover:brightness-50">
              Confirm Order
            </button>
          </Modal.Open>
          <Modal.Window name="confirm">
            <ConfirmOrder />
          </Modal.Window>
        </Modal>

        {/* {isOpenModal && (
          <Modal onClose={() => setIsOpenModal(false)}>
            <ConfirmOrder />
          </Modal>
        )} */}
      </div>
    </div>
  );
}

export default OrderDetails;
