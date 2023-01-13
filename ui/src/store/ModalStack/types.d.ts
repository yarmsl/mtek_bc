interface IModalStack {
  open: boolean;
  window: ModalStackTypes;
}

type ModalStackTypes = React.ReactElement | JSX.Element;
