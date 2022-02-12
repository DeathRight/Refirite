import Modal from "./common/Modal";
import Spinner from "./Spinner";

const LoadingOverlay = () => (
  <Modal show={true}>
    <Spinner />
  </Modal>
);
export default LoadingOverlay;
