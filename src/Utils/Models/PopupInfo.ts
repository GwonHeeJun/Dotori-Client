export interface PopupInfo {
    id?: number;
    title: string;
    message?: string;
    element?: JSX.Element;
    confirmLabel?: string;
    confirmAction?: () => void;
    closeLabel?: string;
    closeAction?: () => void;
    showOnlyBody?: boolean;
    withoutClose?: boolean;
  }